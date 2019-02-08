const bookingService = require('../../services/bookingService');

module.exports = {
  createBooking: async (req, res) => {
    const {
      showId,
      fname,
      lname,
      email,
      pnumber,
      normalCount,
      discountCount,
      specialPriceCount,
      specialPrice,
    } = req.body;
    try {
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
      );
      res.status(200).send(booking);
    } catch (e) {
      console.log(e);
      res.status(500).send('Palvelimella tapahtui virhe');
    }
  },

  updateBooking: async (req, res) => {
    const {
      showId,
      fname,
      lname,
      email,
      pnumber,
      normalCount,
      discountCount,
      specialPriceCount,
      specialPrice,
    } = req.body;
    const id = req.params.bookingId;
    try {
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
      );
      res.status(200).send(booking);
    } catch (e) {
      console.log(e);
      res.status(500).send('Palvelimella tapahtui virhe');
    }
  },

  deleteBooking: async (req, res) => {
    const { bookingId } = req.params;
    try {
      await bookingService.deleteBooking(bookingId);
      res.status(200).send();
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
};
