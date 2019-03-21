const feedbackService = require('../../services/feedbackService');
const validator = require('../../utils/validation');

const validateFeedback = ({ name, email, feedback }) => {
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
  getFeedback: async (req, res) => {
    try {
      const feedback = await feedbackService.getFeedback();
      res.json({ success: true, data: feedback });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  createFeedback: async (req, res) => {
    try {
      validateFeedback(req.body);
      await feedbackService.createFeedback(req.body);
      res.json({ success: true });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  deleteFeedback: async (req, res) => {
    try {
      await feedbackService.deleteFeedback(req.params.feedbackId);
      res.json({ success: true });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },
};
