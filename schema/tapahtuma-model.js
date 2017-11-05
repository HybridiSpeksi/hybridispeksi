var mongoose = require('mongoose');

var tapahtumaSchema = new mongoose.Schema({
    //Key & value dropdown-komponentin käyttöä varten
    //Value tunnisteena
    value: {
        type: String,
        required: true,
        unique: true},
    name: String,
    kuvaus: [String],
    aika: Date,
    paikka: String,
    suljettu: Boolean,
    ilmoauki: Date,
    ilmokiinni: Date,
    tilaTeksti: String
}, { 
    collection: 'tapahtumat', 
    strict: false,
    timestamps: true 
})

module.exports = mongoose.model('Tapahtuma', tapahtumaSchema);