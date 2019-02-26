const bookingService = require('../../services/bookingService');
const mailer = require('../../utils/mailer');
const validator = require('../../utils/validation');
const paymentFactory = require('../../utils/payments');

const validateBooking = (booking) => {
  const {
    fname, lname, email,
  } = booking.ContactInfo;
  const {
    normalCount, discountCount, specialPriceCount, specialPrice, showId,
  } = booking;
  if (validator.isEmptyOrNull(fname)) {
    throw new Error('Etunimi on pakollinen tieto');
  }
  if (validator.isEmptyOrNull(lname)) {
    throw new Error('Sukunimi on pakollinen tieto');
  }
  if (validator.isEmptyOrNull(email)) {
    throw new Error('Sähköposti on pakollinen tieto');
  }
  if (!validator.isValidEmail(email)) {
    throw new Error('Virheellinen sähköpostiosoite');
  }
  if (!validator.isNumber(normalCount)
    || !validator.isNumber(discountCount)
    || !validator.isNumber(specialPriceCount)
    || !validator.isNumber(specialPrice)) {
    throw new Error('Lippumäärän tulee olla numero');
  }
  if (normalCount + discountCount + specialPriceCount < 1) {
    throw new Error('Varauksessa tulee olla vähintään yksi lippu');
  }
  if (validator.isEmptyOrNull(showId)) {
    throw new Error('Varaukselle ei ole valittu esitystä');
  }
};

module.exports = {
  getBookingById: async (req, res) => {
    try {
      const booking = await bookingService.findById(req.params.bookingId);
      res.json({ success: true, data: booking });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  createBooking: async (req, res) => {
    const {
      showId,
      normalCount,
      discountCount,
      specialPriceCount,
      specialPrice,
      paid,
      paymentMethodCode,
      additionalInfo,
    } = req.body;
    const {
      fname,
      lname,
      email,
      pnumber,
    } = req.body.ContactInfo;
    try {
      validateBooking(req.body);
      const booking = await bookingService.createBooking(
        showId,
        fname,
        lname,
        email,
        pnumber,
        normalCount,
        discountCount,
        specialPriceCount,
        specialPrice,
        paid,
        paymentMethodCode,
        additionalInfo,
      );
      if (paid) {
        await mailer.sendTicket(booking.get('id'));
      }
      res.json({ success: true, data: booking });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  updateBooking: async (req, res) => {
    const {
      showId,
      normalCount,
      discountCount,
      specialPriceCount,
      specialPrice,
      additionalInfo,
      paymentMethodId,
      paid,
    } = req.body;
    const {
      fname,
      lname,
      email,
      pnumber,
    } = req.body.ContactInfo;
    const id = req.params.bookingId;
    try {
      validateBooking(req.body);
      const booking = bookingService.updateBooking(
        id,
        showId,
        fname,
        lname,
        email,
        pnumber,
        normalCount,
        discountCount,
        specialPriceCount,
        specialPrice,
        additionalInfo,
        paid,
        paymentMethodId,
      );
      res.json({ success: true, data: booking });
    } catch (e) {
      console.log(e);
      res.json({ success: false, message: e.message });
    }
  },

  createPublicBooking: async (req, res) => {
    const {
      showId,
      normalCount,
      discountCount,
      additionalInfo,
    } = req.body;
    const {
      fname,
      lname,
      email,
      pnumber,
    } = req.body.ContactInfo;
    try {
      const body = { ...req.body, specialPrice: 0, specialPriceCount: 0 };
      validateBooking(body);
      const booking = await bookingService.createBooking(
        showId,
        fname,
        lname,
        email,
        pnumber,
        normalCount,
        discountCount,
        0, // specialPriceCount
        0, // specialPrice
        false, // paid
        100, // paymentMethodCode
        additionalInfo,
      );
      const payment = await paymentFactory.createPayment(booking.get('id'));
      res.json({ success: true, data: payment });
    } catch (e) {
      console.log(e);
      res.json({ success: false, message: e.message });
    }
  },

  deleteBooking: async (req, res) => {
    const { bookingId } = req.params;
    try {
      await bookingService.deleteBooking(bookingId);
      res.json({ success: true });
    } catch (e) {
      console.log(e);
      res.status(500).send('Palvelimella tapahtui virhe');
    }
  },

  getBookingsByShowId: async (req, res) => {
    const showId = req.params.showId;
    try {
      const bookings = await bookingService.getBookingsByShowId(showId);
      res.status(200).send(bookings);
    } catch (e) {
      console.log(e);
      res.status(500).send('Palvelimella tapahtui virhe');
    }
  },

  handleSuccessfulPayment: async (req, res) => {
    const bookingId = req.query.ORDER_NUMBER;
    const paymentMethodCode = req.query.METHOD;
    try {
      paymentFactory.isValidResponse(req);
      const booking = await bookingService.findById(bookingId);
      const paymentMethod = await bookingService.getPaymentMethodByCode(paymentMethodCode);
      booking.set('paid', true);
      booking.set('paymentMethodId', paymentMethod.get('id'));
      await booking.save();
      await mailer.sendTicket(bookingId);
      res.redirect('/speksi2019/vahvistus/' + booking.get('id'));
    } catch (e) {
      res.redirect('/speksi2019/virhe/');
    }
  },

  handleNotifyPayment: async (req, res) => {
    const bookingId = req.query.ORDER_NUMBER;
    const paymentMethodCode = req.query.METHOD;
    try {
      paymentFactory.isValidResponse(req);
      const booking = await bookingService.findById(bookingId);
      if (booking.get('paid')) {
        throw new Error('Payment already handled, no action required');
      }
      const paymentMethod = await bookingService.getPaymentMethodByCode(paymentMethodCode);
      booking.set('paid', true);
      booking.set('paymentMethodId', paymentMethod.get('id'));
      await booking.save();
      await mailer.sendTicket(bookingId);
      res.redirect('/speksi2019/vahvistus/' + booking.get('id'));
    } catch (e) {
      console.log(e);
      res.redirect('/speksi2019/virhe/');
    }
  },

  getPaymentMethods: async (req, res) => {
    try {
      const methods = await bookingService.getPaymentMethods();
      res.json({ success: true, data: methods });
    } catch (e) {
      console.log(e);
      res.json({ success: false, message: e.message });
    }
  },
};
