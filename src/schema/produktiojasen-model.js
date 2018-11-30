const mongoose = require('mongoose');

module.exports = mongoose.model('Produktionjasen', new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  pnumber: String,
  tehtavat: [String],
  jarjesto: String,
  lisatiedot: String,
  hakeeJaseneksi: Boolean,
  tuotannonMuistiinpanot: String,
  vuosi: Number,
  member: Boolean,
}, {
  collection: 'produktionjasenet',
  timestamps: true,
}));
