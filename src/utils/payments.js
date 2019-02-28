const config = require('./../config');
const axios = require('axios');
const crypto = require('crypto');
const bookingService = require('../services/bookingService');
const bookingUtils = require('../utils/bookingUtils');

const PAYMENT_URL = 'https://payment.paytrail.com/api-payment/create';

module.exports = {
  createPayment: async (bookingId) => {
    let payment;
    if (process.env.NODE_ENV === 'develop') {
      payment = {
        currency: 'EUR',
        locale: 'fi_FI',
        urlSet: {
          success: 'http://127.0.0.1:3000/api/payment/success',
          failure: 'http://127.0.0.1:3000/api/payment/failure',
          pending: 'http://127.0.0.1:3000/api/payment/success',
          notification: 'http://127.0.0.1:3000/api/payment/notify',
        },
      };
    } else {
      payment = {
        currency: 'EUR',
        locale: 'fi_FI',
        urlSet: {
          success: 'https://www.hybridispeksi.fi/api/payment/success',
          failure: 'https://www.hybridispeksi.fi/api/payment/failure',
          pending: 'https://www.hybridispeksi.fi/api/payment/success',
          notification: 'https://www.hybridispeksi.fi/api/payment/notify',
        },
      };
    }
    const booking = await bookingService.findById(bookingId);
    payment.price = bookingUtils.countPrice(booking);
    payment.orderNumber = bookingId;
    let kauppiastunnus;
    let kauppiasvarmenne;
    if (process.env.NODE_ENV === 'develop') {
      kauppiastunnus = config.kauppiastunnus;
      kauppiasvarmenne = config.kauppiasvarmenne;
    } else {
      kauppiastunnus = process.env.KAUPPIASTUNNUS;
      kauppiasvarmenne = process.env.KAUPPIASVARMENNE;
    }
    console.log('send ajax to paytrail');
    console.log(kauppiastunnus + ' ' + kauppiasvarmenne);
    try {
      const res = await axios({
        method: 'post',
        url: PAYMENT_URL,
        auth: {
          username: kauppiastunnus,
          password: kauppiasvarmenne,
        },
        data: JSON.stringify(payment),
        headers: {
          'Content-Type': 'application/json',
          'X-Verkkomaksut-Api-Version': 1,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
      throw new Error('Maksutapahtuman luonti epäonnistui.');
    }
  },

  isValidResponse: (request) => {
    let kauppiastunnus;
    let kauppiasvarmenne;
    if (process.env.NODE_ENV === 'develop') {
      kauppiastunnus = config.kauppiastunnus;
      kauppiasvarmenne = config.kauppiasvarmenne;
    } else {
      kauppiastunnus = process.env.KAUPPIASTUNNUS;
      kauppiasvarmenne = process.env.KAUPPIASVARMENNE;
    }
    const ordernumber = request.query.ORDER_NUMBER;
    const timestamp = request.query.TIMESTAMP;
    const paid = request.query.PAID;
    const method = request.query.METHOD;
    const authcode = request.query.RETURN_AUTHCODE;
    console.log('########################');
    console.log(paid);
    const params =
      ordernumber + '|' + timestamp + '|' + paid + '|' + method + '|' + kauppiasvarmenne;
    const hash = crypto
      .createHash('md5')
      .update(params)
      .digest('hex');
    if (!paid) {
      throw new Error('1');
    }
    if (hash.toUpperCase() === authcode.toUpperCase()) {
      return true;
    }
    throw new Error('2');
  },
};

