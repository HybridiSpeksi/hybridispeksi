const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'Vuodenspeksaaja',
  new Schema(
    {
      name: String,
      personToVote: String,
      comment: String,
    },
    {
      collection: 'vuodenspeksaaja',
      timestamps: true,
    },
  ),
);
