const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuid(),
      },
      normalCount: {
        type: Sequelize.INTEGER,
      },
      discountCount: {
        type: Sequelize.INTEGER,
      },
      specialPriceCount: {
        type: Sequelize.INTEGER,
      },
      specialPrice: {
        type: Sequelize.DECIMAL(10, 2),
      },
      tag: {
        type: Sequelize.STRING,
      },
      redeemed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      paid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    return queryInterface.dropTable('Bookings');
  },
};
