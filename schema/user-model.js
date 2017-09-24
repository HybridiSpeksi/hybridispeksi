var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({ 
    fname: String,
    sname: String,
    email: String, 
    password: String, 
    role: String 
}, 
{ collection: 'users'},
{ timestamps: true}));