const Jasenrekisteri = require('../../schema/jasen-model');

module.exports = {
  getAll: (req, res) => {
    Jasenrekisteri.find()
      .then(_data => res.json({ success: true, data: _data }))
      .catch(err => res.json({ success: false, data: err }));
  },

  newJasen: (req, res) => {
    const jasen = new Jasenrekisteri({
      fname: req.body.fname,
      sname: req.body.sname,
      email: req.body.email,
      approved: false,
      memberOfTyy: req.body.memberOfTyy,
      hometown: req.body.hometown,
      joinDate: new Date(),
    });
    jasen.save()
      .then(_jasen => res.json({ success: true, data: _jasen }))
      .catch(err => res.json({ success: false, data: err }));
  },

  hyvaksyJasen: (req, res) => {
    Jasenrekisteri.findByIdAndUpdate(
      { _id: req.params._id },
      {
        approved: true,
        approveDate: new Date(),
      },
    )
      .then(jasen => res.json({ success: true, data: jasen }))
      .catch(err => res.json({ success: true, data: err }));
  },

  muokkaaJasen: (req, res) => {
    const jasen = req.body;
    Jasenrekisteri.findByIdAndUpdate(jasen._id, jasen)
      .then(_jasen => res.json({ success: true, data: _jasen }))
      .catch(err => res.json({ success: false, data: err }));
  },

  remove: (req, res) => {
    Jasenrekisteri.remove({ _id: req.params._id })
      .then(() => res.json({ success: true }))
      .catch(err => res.json({ success: false, data: err }));
  },
};
