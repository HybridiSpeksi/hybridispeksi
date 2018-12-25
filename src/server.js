const express = require('express');

const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
// var cors = require('cors');

// Basic conf
dotenv.load();
app.set('port', process.env.PORT || 3002);
app.set('secret', process.env.SECRET);

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
} else {
  app.use(bodyParser.json());
  app.use(morgan('common'));
}

mongoose.connect(process.env.MONGOLAB_URI)
  .then(() => {
    console.log('Connected to database in ' + process.env.MONGOLAB_URI);
  })
  .catch((err) => {
    console.log(err);
  });

// Initiate API
app.use('/api', require('./api/index'));

// Static assets
app.use('/', express.static(path.join(__dirname, '/dist')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));

// Serve index.html for every other request. Client router handles the rest
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
  });
}
app.listen(app.get('port'), '0.0.0.0', () => {
  console.log('Node App Started on port ' + app.get('port'));
});
