// dev-server.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const config = require('./config');
const mongoose = require('mongoose');

dotenv.load();

mongoose.connect(process.env.MONGOLAB_URI);
mongoose.connection.on('connected', function() {
    console.log('Connected to database in ' + process.env.MONGOLAB_URI);
})

app.set('port', process.env.PORT || 3001);

const index = require('./api/index');

app.use('/api', index);

app.get("*", function(req, res) {

})

app.listen(app.get('port'), function() {
    console.log('Node App Started on port ' + app.get('port'));
});