const config = require('./../config');
const axios = require('axios');

const PAYMENT_URL = 'https://payment.paytrail.com/api-payment/create';

module.exports = {
  createPayment: (booking) => {
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
    payment.price = countPrice(booking);
    payment.orderNumber = booking._id;
    const p = new Promise((resolve, reject) => {
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
      // axios.post(PAYMENT_URL, data, CONFIG)
      axios({
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
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err);
          console.log('epäonnistunut maksutapahtuman luonti');
          reject({ code: 500, message: 'Maksutapahtuman luonti epäonnistui.' });
        });
    });
    return p;
  },
};

function countPrice(varaus) {
  let price = 0;
  price += varaus.scount * config.sprice;
  price += varaus.ncount * config.nprice;
  price += varaus.ocount * varaus.oprice;

  return price;
}
