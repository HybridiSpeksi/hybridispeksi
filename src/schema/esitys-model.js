var mongoose = require('mongoose');

var esitysSchema = new mongoose.Schema({
    day: String,
    date: Date,
    name: String,
    bookingCount: Number
}, {
    collection: 'esitykset'
})

module.exports = mongoose.model('Esitys', esitysSchema);