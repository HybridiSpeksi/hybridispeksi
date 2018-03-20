const Palaute = require('../../schema/palautteet-model');
const validator = require('../../utils/validation');

const validate = (req) => {
  const { name, email, feedback } = req.body;
  if (validator.isEmptyOrNull(feedback)) {
    throw new Error('Tyhjää palautetta ei voi lähettää');
  } else if (validator.isTooLong(feedback, 700)) {
    throw new Error('Palaute ei saa ylittää 700 merkkiä');
  } else if (!validator.isEmptyOrNull(email) && !validator.isValidEmail(email)) {
    throw new Error('Virheellinen sähköposti');
  } else if (!validator.isEmptyOrNull(name) && validator.isTooLong(name, 40)) {
    throw new Error('Nimi on liian pitkä');
  }
};

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Palaute.find();
      res.json({ success: true, data: result });
    } catch (err) {
      res.json({ success: false, data: err });
    }
  },

  createNew: async (req, res) => {
    const palaute = new Palaute({ ...req.body });
    try {
      validate(req);
      await palaute.save();
      res.json({ success: true });
    } catch (err) {
      console.log(err.message);
      res.json({ success: false, data: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await Palaute.deleteOne({ _id: req.params._id });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  },
};
