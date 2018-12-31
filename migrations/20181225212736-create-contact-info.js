

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ContactInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fname: {
        type: Sequelize.STRING,
      },
      lname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      pnumber: {
        type: Sequelize.STRING,
      },
      hometown: {
        type: Sequelize.STRING,
      },
      memberOfTyy: {
        type: Sequelize.BOOLEAN,
      },
    }, {
      timestamps: true,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ContactInfos');
  },
};
