var mongoose = require('mongoose');

var varausSchema = new mongoose.Schema({
    fname: String,
    sname: String,
    email: String,
    pnumber: String,
    scount: {type: Number, default: 0},
    ncount: {type: Number, default: 0},
    ocount: {type: Number, default: 0},
    oprice: {type: Number, default: 0},
    checked: {type: Boolean, default: false},
    paymentMethod: {type: Number, default: 0},
    paid: {type: Boolean, default: false},
    esitysId: {type: String, required: true},
    additional: {type: String, default: ""},
    bookingId: {type: String},
}, {
    collection: 'varaukset',
    timestamps: true
})

module.exports = mongoose.model('Varaus', varausSchema);