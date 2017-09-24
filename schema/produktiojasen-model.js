var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 module.exports = mongoose.model('Produktionjasen', new mongoose.Schema({
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
}, {
    collection: 'produktionjasenet'
},
{
    timestamps: true
}))