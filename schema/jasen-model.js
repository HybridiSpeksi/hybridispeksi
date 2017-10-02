var mongoose = require('mongoose');

var jasenSchema = new mongoose.Schema({
    fname: String,
	sname: String,
	email: String,
	approved: Boolean,
	memberOfTyy: Boolean,
	hometown: String,
	joinDate: Date,
	approveDate: Date
}, 
{ collection: 'members', 
timestamps: true })

module.exports = mongoose.model('Jasen', jasenSchema);