const jasen = require('../../schema/produktiojasen-model');

// TODO: restrictions
function getAll (req, res) {
    jasen.find()
    .catch(function(err) {
        res.status(500).send(err);
    })
    .then(function(data) {
        res.status(200).send(data);
    })
}

/**
 * Return by req.body._id.
 */
function getById (req, res) {
    res.status(200).send("ok");
}

function newJasen (req, res) {
    console.log(req.body);
    res.json({success: true});
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.newJasen = newJasen;