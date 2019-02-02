const uuid = require('uuid/v4');
const transaction = require('sequelize').transaction;
const Booking = require('../../models').Booking;
const Show = require('../../models').Show;
const ContactInfo = require('../../models').ContactInfo;

module.exports = {

  createBooking: async (
    showId,
    fname,
    lname,
    email,
    pnumber,
    normalCount,
    discountCount,
    specialPriceCount,
    specialPrice,
  ) => {
    try {
      const t = await transaction;
      const show = await Show.findOne({ where: { id: showId } });
      const contactInfo = await ContactInfo.create({
        id: uuid(),
        fname,
        lname,
        email,
        pnumber,
      }, { transaction: t });
      const booking = await Booking.create({
        id: uuid(),
        normalCount,
        discountCount,
        specialPriceCount,
        specialPrice,
      });
      await booking.setShow(show, { transaction: t });
      await booking.setContactInfo(contactInfo, { transaction: t });
      return booking;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  // TODO: test if works without removing booking inplicitly
  deleteBooking: async (bookingId) => {
    try {
      const t = await transaction;
      const booking = await Booking.findOne({ where: { id: bookingId } });
      await ContactInfo.destroy({
        where: { id: booking.get('contactInfoId') },
      });
      await Booking.destr;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};
