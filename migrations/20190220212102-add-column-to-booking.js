

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Bookings',
      'additionalInfo',
      Sequelize.STRING,
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Bookings',
      'additionalInfo',
    );
  },
};
