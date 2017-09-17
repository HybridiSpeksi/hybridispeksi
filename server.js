// dev-server.js
const express = require('express');
const app = express();
// Import routes
// require('./_routes')(app);   // <-- or whatever you do to include your API endpoints and middleware
app.set('port', process.env.PORT || 3001);


const index = require('./api/index');

app.use('/api', index);

app.get("*", function(req, res) {

})

app.listen(app.get('port'), function() {
    console.log('Node App Started on port ' + app.get('port'));
});