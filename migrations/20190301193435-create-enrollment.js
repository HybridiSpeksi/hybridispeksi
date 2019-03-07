const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enrollments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuid(),
      },
      presentGreeting: {
        type: Sequelize.BOOLEAN,
      },
      greetingOrganization: {
        type: Sequelize.STRING,
      },
      avec: {
        type: Sequelize.STRING,
      },
      partyExpectation: {
        type: Sequelize.STRING,
      },
      menu: {
        type: Sequelize.STRING,
      },
      diet: {
        type: Sequelize.STRING,
      },
      alcohol: {
        type: Sequelize.BOOLEAN,
      },
      sillis: {
        type: Sequelize.BOOLEAN,
      },
      memberOfSpeksi: {
        type: Sequelize.BOOLEAN,
      },
      paid: {
        type: Sequelize.BOOLEAN,
      },
      additional: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Enrollments');
  },
};
