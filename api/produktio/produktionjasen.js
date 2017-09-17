function getAll (req, res) {
    console.log("getAll");
    res.status(200).send();
}

/**
 * Return by req.body._id.
 */
function getById (req, res) {
    console.log(req.params._id)
    res.status(200).send("ok");
}

module.exports.getAll = getAll;
module.exports.getById = getById;