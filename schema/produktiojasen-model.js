var mongoose = require('mongoose');

var henkiloSchema = new mongoose.Schema({
    fname: String,
    sname: String,
    email: String,
    pnumber: String,
    tehtavat: [String],
    jarjesto: String,
    lisatiedot: String,
    hakeeJaseneksi: Boolean,
    tuotannonMuistiinpanot: String,
    vuosi: Number
}, 
{
    timestamps: true
})

module.exports = mongoose.model('Henkilo', henkiloSchema);