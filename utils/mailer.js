var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var moment = require('moment');

var cashTicket = require('./mailtemplates/cash_ticket').cashTicket;
var webshopTicket = require('./mailtemplates/webshop_ticket').webshopTicket;

const auth = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.DOMAIN
    }
}

const nodemailerMailgun = nodemailer.createTransport(mg(auth));


module.exports = {
    /**
     * Send ticket
     * @return promise()
     */
    sendTicket: (booking) => {
        nodemailerMailgun.sendMail({
            from: 'lipunmyynti@hybridispeksi.fi',
            to: booking.email,
            subject: 'Varausvahvistus',
            html: cashTicket()
        })
        console.log('sendTicket');
        console.log(cashTicket());
    },
}