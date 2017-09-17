// dev-server.js
const express = require('express');
const app = express();
// Import routes
// require('./_routes')(app);   // <-- or whatever you do to include your API endpoints and middleware
app.set('port', 3001);

app.get("*", function(req, res) {
    console.log("asdf");
    res.status(200).send();
})

app.listen(app.get('port'), function() {
    console.log('Node App Started on port ' + app.get('port'));
});