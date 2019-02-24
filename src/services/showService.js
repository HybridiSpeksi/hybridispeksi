const uuid = require('uuid/v4');
const Booking = require('../../models').Booking;
const Show = require('../../models').Show;

const self = {

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

  updateShow: async (
    id, date, limit, nameLong, nameShort,
  ) => {
    try {
      const show = await Show.findOne({ where: { id } });
      if (show) {
        await show.update({
          date, limit, nameLong, nameShort,
        });
      } else {
        throw new Error('No show found for id');
      }
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
      return;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  getShows: async () => {
    try {
      const shows = await Show.findAll({
        include: [
          { model: Booking, as: 'Bookings' },
        ],
        order: [['date', 'ASC']],
      });
      const showsWithBookingCounts = shows.map((show) => {
        const showJson = show.toJSON();
        showJson.bookingCount = self.countBookings(show);
        return showJson;
      });
      return showsWithBookingCounts;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  findById: async (id) => {
    try {
      const show = await Show.findOne({ where: { id } });
      return show;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  countBookings: (show) => {
    const bookings = show.get('Bookings');
    const totalCount = bookings.reduce((count, booking) => {
      return count + booking.get('normalCount') + booking.get('discountCount') + booking.get('specialPriceCount');
    }, 0);
    return totalCount;
  },
};

module.exports = self;
