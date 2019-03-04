const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const bookingService = require('../services/bookingService');

const cashTicket = require('./mailtemplates/cash_ticket').cashTicket;
const enrollmentConfirmation = require('./mailtemplates/enrollment_confirmation').confirmationMail;

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.DOMAIN,
  },
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));


module.exports = {
  /**
     * Send ticket
     * @return promise()
     */
  sendTicket: async (bookingId) => {
    try {
      const booking = await bookingService.findById(bookingId);
      await nodemailerMailgun.sendMail({
        from: 'lipunmyynti@hybridispeksi.fi',
        to: booking.get('ContactInfo').get('email'),
        subject: 'Varausvahvistus',
        html: cashTicket(booking),
      });
    } catch (err) {
      console.log(err);
      throw new Error('3');
    }
  },

  sendVujuConfirmation: async (email) => {
    try {
      await nodemailerMailgun.sendMail({
        from: 'vuosijuhlat@hybridispeksi.fi',
        to: email,
        subject: 'Varausvahvistus',
        html: enrollmentConfirmation(),
      });
    } catch (err) {
      console.log(err);
      throw new Error('Vahvistussähköpostia ei voitu lähettää. Tarkistathan sähköpostiosoitteesi');
    }
  },
};
