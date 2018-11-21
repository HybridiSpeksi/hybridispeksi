const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'Ohjaustieto',
  new Schema(
    {
      key: String,
      value: String,
      name: String,
      truefalse: Boolean,
    },
    {
      collection: 'ohjaustietos',
      timestamps: true,
    },
  ),
);
