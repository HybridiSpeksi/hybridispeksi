const uuid = require('uuid/v4');
const transaction = require('sequelize').transaction;
const Booking = require('../../models').Booking;
const Show = require('../../models').Show;
const ContactInfo = require('../../models').ContactInfo;
const PaymentMethod = require('../../models').PaymentMethod;
const showService = require('./showService');
const bookingUtils = require('../utils/bookingUtils');

const generateTag = () => {
  let id = '';
  const letters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
  for (let i = 0; i < 5; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return id;
};

const checkIfSpace = (show, booking) => {
  if (showService.countBookings(show) + bookingUtils.getTotalCount(booking) > show.get('limit')) {
    throw new Error('Esityksessä ei ole tarpeeksi tilaa');
  }
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
    paid,
    paymentMethodId,
    additionalInfo,
  ) => {
    try {
      const t = await transaction;
      const show = await Show.findOne(
        {
          include: [{ model: Booking, as: 'Bookings' }],
          where: { id: showId },
        },
        { transaction: t },
      );
      checkIfSpace(show, { normalCount, discountCount, specialPriceCount });
      const paymentMethod = await PaymentMethod.findOne({ where: { id: paymentMethodId } }, { transaction: t });
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
        tag: generateTag(),
        redeemed: false,
        paid,
        additionalInfo,
      }, { transaction: t });
      booking.setShow(show, { transaction: t });
      booking.setContactInfo(contactInfo, { transaction: t });
      booking.setPaymentMethod(paymentMethod, { transaction: t });
      await booking.save();
      return booking;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  getPaymentMethodByCode: async (code) => {
    try {
      const paymentMethod = await PaymentMethod.findOne({
        where: { code },
      });
      return paymentMethod;
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
    additionalInfo,
    paid,
    paymentMethodId,
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
          additionalInfo,
          paid,
          paymentMethodId,
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

  getAllBookings: async () => {
    try {
      const bookings = await Booking.findAll({
        include: [{ model: ContactInfo }],
      });
      return bookings;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  getBookingsByShowId: async (showId) => {
    try {
      const bookings = await Booking.findAll({
        where: { showId },
        include: { model: ContactInfo },
        order: [['createdAt', 'DESC']],
      });
      return bookings;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  findById: async (id) => {
    try {
      const booking = await Booking.findOne({
        where: { id },
        include: [{ model: ContactInfo }, { model: Show }],
      });
      return booking;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  getPaymentMethods: async () => {
    try {
      const methods = await PaymentMethod.findAll();
      return methods;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  redeem: async (id) => {
    try {
      const booking = await Booking.findOne({
        where: { id },
        include: [{ model: ContactInfo }, { model: Show }],
      });
      booking.set('redeemed', true);
      await booking.save();
      return booking;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

};
