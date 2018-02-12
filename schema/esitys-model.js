var mongoose = require('mongoose');

var esitysSchema = new mongoose.Schema({
    day: String,
    date: Date,
}, {
    collection: 'esitykset'
})

module.exports = mongoose.model('Esitys', esitysSchema);