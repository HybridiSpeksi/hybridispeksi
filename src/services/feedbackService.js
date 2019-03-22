const uuid = require('uuid/v4');
const Feedback = require('../../models').Feedback;

module.exports = {
  createFeedback: async ({ name, email, feedback }) => {
    try {
      await Feedback.create({
        id: uuid(),
        name,
        email,
        feedback,
      });
      return;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  getFeedback: async () => {
    try {
      const feedback = await Feedback.findAll();
      return feedback;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  deleteFeedback: async (id) => {
    try {
      await Feedback.destroy({ where: { id } });
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};
