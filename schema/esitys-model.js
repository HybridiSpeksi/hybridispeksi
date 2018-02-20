var mongoose = require('mongoose');

var esitysSchema = new mongoose.Schema({
    day: String,
    date: Date,
    name: String
}, {
    collection: 'esitykset'
})

module.exports = mongoose.model('Esitys', esitysSchema);