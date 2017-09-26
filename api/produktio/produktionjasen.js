const Jasen = require('../../schema/produktiojasen-model');

function getAll (req, res) {
    console.log('getall')
    Jasen.find({vuosi: req.params.vuosi})
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
    let uusiJasen = req.body;
    let jasen = new Jasen({
        fname: req.body.fname,
        sname: req.body.sname,
        email: req.body.email,
        pnumber: req.body.pnumber,
        tehtavat: req.body.tehtavat,
        jarjesto: req.body.jarjesto,
        lisatiedot: req.body.lisatiedot,
        hakeeJaseneksi: req.body.jasenyys,
        vuosi: '2018'
    })
    jasen.save()
    .then(jasen => {
        res.json({success: true, data: jasen});
    })
    .catch(err => {
        res.json({success: false, data: err});
    })
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.newJasen = newJasen;