const Jasen = require('../../schema/produktiojasen-model');
const Yhdistyksenjasen = require('../../schema/jasen-model');

function getAll(req, res) {
  let produktioHaettu = false;
  let jasenetHaettu = false;
  let henkilot = [];
  let jasenet = [];
  let henkilotJasentiedoilla = [];

  Jasen.find({ vuosi: req.params.vuosi })
    .catch((err) => {
      res.status(500).send(err);
    })
    .then((data) => {
      henkilot = data;
      produktioHaettu = true;
      if (jasenetHaettu) {
        henkilotJasentiedoilla = yhdistaJasenetJaProduktio(henkilot, jasenet);
        // console.log(henkilotJasentiedoilla)
        res.status(200).send(henkilotJasentiedoilla);
      }
      // res.status(200).send(data);
    });

  Yhdistyksenjasen.find({}, { email: 1 })
    .then((data) => {
      jasenet = data;
      jasenetHaettu = true;
      if (produktioHaettu) {
        henkilotJasentiedoilla = yhdistaJasenetJaProduktio(henkilot, jasenet);
        // console.log(henkilotJasentiedoilla)
        res.status(200).send(henkilotJasentiedoilla);
      }
    });
}

/**
 * Return by req.body._id.
 */
function getById(req, res) {
  // TODO
  res.status(200).send('TODO');
}

function newJasen(req, res) {
  const jasen = new Jasen({
    fname: req.body.fname,
    lname: req.body.sname,
    email: req.body.email,
    pnumber: req.body.pnumber,
    tehtavat: req.body.tehtavat,
    jarjesto: req.body.jarjesto,
    lisatiedot: req.body.lisatiedot,
    hakeeJaseneksi: req.body.jasenyys,
    vuosi: '2018',
  });
  jasen.save()
    .then((jasen) => {
      res.json({ success: true, data: jasen });
    })
    .catch((err) => {
      res.json({ success: false, data: err });
    });
}

function muokkaaJasen(req, res) {
  const jasen = req.body;
  Jasen.findByIdAndUpdate(jasen._id, jasen)
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false, data: err });
    });
}

function remove(req, res) {
  Jasen.remove({ _id: req.params._id })
    .then(() => res.json({ success: true }))
    .catch(err => res.json({ success: false, data: err }));
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.newJasen = newJasen;
module.exports.muokkaaJasen = muokkaaJasen;
module.exports.remove = remove;

const yhdistaJasenetJaProduktio = (henkilot, jasenet) => {
  for (let i = 0; i < henkilot.length; i++) {
    for (let j = 0; j < jasenet.length; j++) {
      if (henkilot[i].email.toLowerCase() === jasenet[j].email.toLowerCase()) {
        henkilot[i].member = true;
      }
    }
  }
  return henkilot;
};
