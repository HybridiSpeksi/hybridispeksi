var mongoose = require('mongoose');

var ilmoSchema = new mongoose.Schema({
    tapahtuma: String,
    fname: String,
    sname: String,
    email: String,
    pnumber: String,
    jarjesto: String
}, { 
    collection: 'ilmot', 
    strict: false,
    timestamps: true
 })

module.exports = mongoose.model('Ilmo', ilmoSchema);