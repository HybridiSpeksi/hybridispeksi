const Jasen = require('../../schema/produktiojasen-model');
const Yhdistyksenjasen = require('../../schema/jasen-model');

function getAll(req, res) {
    var produktioHaettu = false;
    var jasenetHaettu = false;
    var henkilot = [];
    var jasenet = [];
    var henkilotJasentiedoilla = [];

    Jasen.find({ vuosi: req.params.vuosi })
        .catch(function (err) {
            res.status(500).send(err);
        })
        .then(function (data) {
            henkilot = data;
            produktioHaettu = true;
            if (jasenetHaettu) {
                henkilotJasentiedoilla = yhdistaJasenetJaProduktio(henkilot, jasenet);
                // console.log(henkilotJasentiedoilla)
                res.status(200).send(henkilotJasentiedoilla);
            }
            // res.status(200).send(data);
        })

    Yhdistyksenjasen.find({}, { email: 1 })
        .then(function (data) {
            jasenet = data;
            jasenetHaettu = true;
            if (produktioHaettu) {
                henkilotJasentiedoilla = yhdistaJasenetJaProduktio(henkilot, jasenet);
                // console.log(henkilotJasentiedoilla)
                res.status(200).send(henkilotJasentiedoilla);
            }
        })
}

/**
 * Return by req.body._id.
 */
function getById(req, res) {
    res.status(200).send("ok");
}

function newJasen(req, res) {
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
            res.json({ success: true, data: jasen });
        })
        .catch(err => {
            res.json({ success: false, data: err });
        })
}

function muokkaaJasen(req, res) {
    let jasen = req.body;
    Jasen.findByIdAndUpdate(jasen._id, jasen)
        .then(jasen => {
            res.json({ success: true, data: jasen })
        })
        .catch(err => {
            res.json({ success: false, data: err })
        })
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.newJasen = newJasen;
module.exports.muokkaaJasen = muokkaaJasen;

var yhdistaJasenetJaProduktio = function (henkilot, jasenet) {
    for (var i = 0; i < henkilot.length; i++) {
        for (var j = 0; j < jasenet.length; j++) {
            if (henkilot[i].email.toLowerCase() === jasenet[j].email.toLowerCase()) {
                henkilot[i].member = true;
                console.log(henkilot[i])
            } else {
                // henkilot[i].member = false;
            }
        }
    }
    console.log(henkilot)
    return henkilot;
}