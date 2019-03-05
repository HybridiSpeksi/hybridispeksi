const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'Palaute',
  new Schema(
    {
      fname: String,
      lname: String,
      email: String,
      feedback: String,
    },
    {
      collection: 'palautteet',
      timestamps: true,
    },
  ),
);
