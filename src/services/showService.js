const uuid = require('uuid/v4');
const transaction = require('sequelize').transaction;
const Booking = require('../../models').Booking;
const Show = require('../../models').Show;
const ContactInfo = require('../../models').ContactInfo;

module.exports = {

  createShow: async (
    date, limit, nameLong, nameShort,
  ) => {
    try {
      const show = await Show.create({
        id: uuid(),
        date,
        limit,
        nameLong,
        nameShort,
      });
      return show;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  deleteShow: async (id) => {
    try {
      await Show.destroy({
        where: { id },
      });
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  getShows: async () => {
    try {
      const shows = Show.findAll({
        include: [
          { model: Booking },
        ],
      });
      const showsWithBookingCounts = shows.map((show) => {
        show.bookingCount = countBookings(show);
        return show;
      });
      return showsWithBookingCounts;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};

const countBookings = (show) => {
  const bookings = show.get('Bookings');
  const totalCount = bookings.reduce((count, booking) => {
    return count + booking.get('normalCount') + booking.get('discountCount') + booking.get('specialPriceCount');
  }, 0);
  return totalCount;
};
