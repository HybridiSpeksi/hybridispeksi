const config = require('../config');

module.exports = {

  getTotalCount: (booking) => {
    const { normalCount, discountCount, specialPriceCount } = booking;
    return Number(normalCount) + Number(discountCount) + Number(specialPriceCount);
  },

  countPrice: (booking) => {
    const {
      normalCount, discountCount, specialPriceCount, specialPrice,
    } = booking;
    let price = 0;
    price += normalCount * config.normalPrice;
    price += discountCount * config.discountPrice;
    price += specialPriceCount * specialPrice;

    return price;
  },
};
