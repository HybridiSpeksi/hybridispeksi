const Palaute = require('../../schema/palautteet-model');
const Vuodenspeksaaja = require('../../schema/vuodenspeksaaja-model');
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

const validateVote = (req) => {
  const { personToVote, comment } = req.body;
  if (validator.isEmptyOrNull(personToVote)) {
    throw new Error('Ehdotettavan nimi ei voi olla tyhjä');
  } else if (validator.isEmptyOrNull(comment)) {
    throw new Error('Ehdotus on perusteltava');
  } else if (!validator.isEmptyOrNull(personToVote) && validator.isTooLong(personToVote, 40)) {
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

  createVote: async (req, res) => {
    try {
      validateVote(req);
      await new Vuodenspeksaaja({ ...req.body }).save();
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false, data: err.message });
    }
  },

  getVotes: async (req, res) => {
    try {
      const result = await Vuodenspeksaaja.find();
      res.json({ success: true, data: result });
    } catch (err) {
      console.log(err);
      res.json({ success: false, data: err });
    }
  },
};
