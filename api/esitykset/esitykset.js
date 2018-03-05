const Esitys = require('../../schema/esitys-model');
const Varaus = require('../../schema/varaus-model');

module.exports = {
  getAll: (req, res) => {
    Esitys.find({}).sort('date').exec()
      .then((_data) => {
        res.json({ success: true, data: _data });
      })
      .catch((err) => {
        res.json({ success: false, data: err });
      });
  },

  getAllWithBookingCounts: (req, res) => {
    let shows = [];
    Esitys.find({}).sort('date').exec()
      .then((_shows) => {
        shows = _shows;
        return Varaus.find({ year: 2018 });
      })
      .then((_bookings) => {
        const result = calculateBookingsForShows(_bookings, shows);
        res.json({ success: true, data: result });
      })
      .catch((err) => {
        res.json({ success: false, data: err });
        console.log(err);
      });
  },
};

function calculateBookingsForShows(bookings, shows) {
  shows.map((s, i) => {
    let counter = 0;
    bookings.map((b) => {
      if (b.esitysId.toString() === s._id.toString()) {
        counter += getTotalCount(b);
      }
    });
    shows[i].bookingCount = counter;
  });
  return shows;
}

function getTotalCount(booking) {
  return booking.ncount + booking.scount + booking.ocount;
}
