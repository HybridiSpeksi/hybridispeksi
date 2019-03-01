

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enrollments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
