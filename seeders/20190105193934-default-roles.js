const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        id: uuid(),
        name: 'Ei hyväksytty',
        value: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        name: 'Lipunmyynti',
        value: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        name: '',
        value: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        name: 'Tuotanto',
        value: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        name: 'Hallitus',
        value: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        name: 'Webmaster',
        value: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  },
};
