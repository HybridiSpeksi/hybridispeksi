var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Ohjaustieto', new Schema({
    key: String,
    value: String,
    name: String
},
{
    collection: 'ohjaustietos',
    timestamps: true
}));

