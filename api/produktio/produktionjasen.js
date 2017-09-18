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
    console.log(req.params._id)
    res.status(200).send("ok");
}

function newJasen (req, res) {

}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.newJasen = newJasen;