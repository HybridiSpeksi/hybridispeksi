const uuid = require('uuid/v4');
const transaction = require('sequelize').transaction;
const Booking = require('../../models').Booking;
const Show = require('../../models').Show;
const ContactInfo = require('../../models').ContactInfo;

const generateTag = () => {
  let id = '';
  const letters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
  for (let i = 0; i < 5; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return id;
};

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
      const show = await Show.findOne({ where: { id: showId } }, { transaction: t });
      const contactInfo = await ContactInfo.create({
        id: uuid(),
        fname,
        lname,
        email,
        pnumber,
        tag: generateTag(),
      }, { transaction: t });
      const booking = await Booking.create({
        id: uuid(),
        normalCount,
        discountCount,
        specialPriceCount,
        specialPrice,
      }, { transaction: t });
      await booking.setShow(show, { transaction: t });
      await booking.setContactInfo(contactInfo, { transaction: t });
      return booking;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  updateBooking: async (
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
  ) => {
    try {
      const booking = await Booking.findOne({ where: { id }, include: { model: ContactInfo } });
      if (booking) {
        await booking.update({
          showId,
          normalCount,
          discountCount,
          specialPriceCount,
          specialPrice,
        });
        const contactInfo = booking.get('ContactInfo');
        contactInfo.update({
          fname,
          lname,
          email,
          pnumber,
        });
      } else {
        throw new Error('No booking found for id');
      }
      return booking;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  deleteBooking: async (bookingId) => {
    try {
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

  getBookingsByShowId: async (showId) => {
    try {
      const bookings = Booking.findAll({
        where: { showId },
        include: { model: ContactInfo },
      });
      return bookings;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

};
