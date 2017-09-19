const express = require('express');
const app = express();
const dotenv = require('dotenv');
const config = require('./config');
const mongoose = require('mongoose');
const morgan = require("morgan");
const path = require('path');

// Basic conf
dotenv.load();
app.set('port', process.env.PORT || 3001);

if (process.env.NODE_ENV !== "production") {
    app.use(morgan('dev'));
} else {
    app.use(morgan('common'))
}

mongoose.connect(process.env.MONGOLAB_URI);
mongoose.connection.on('connected', function () {
    console.log('Connected to database in ' + process.env.MONGOLAB_URI);
})

// Initiate API
app.use('/api', require('./api/index'));

// Static assets
app.use('/', express.static(path.join(__dirname + '/dist')));
app.use('/assets', express.static(path.join(__dirname + 'assets')));

// Serve index.html for every other request. Client router handles the rest
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.listen(app.get('port'), function () {
    console.log('Node App Started on port ' + app.get('port'));
});