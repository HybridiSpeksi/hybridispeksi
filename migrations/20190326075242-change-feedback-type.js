

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .changeColumn('Feedbacks', 'feedback', {
        type: Sequelize.TEXT,
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .changeColumn('Feedbacks', 'feedback', {
        type: Sequelize.STRING,
      });
  },
};
