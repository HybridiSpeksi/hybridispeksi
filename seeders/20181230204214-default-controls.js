
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Controls', [
      // Student organizations
      {
        key: 'jarjesto',
        value: 'asteriski',
        name: 'Asteriski ry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'jarjesto',
        value: 'delta',
        name: 'Delta ry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'jarjesto',
        value: 'digit',
        name: 'Digit ry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'jarjesto',
        value: 'iva',
        name: 'IVA ry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'jarjesto',
        value: 'pulterit',
        name: 'Pulterit ry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'jarjesto',
        value: 'synapsi',
        name: 'Synapsi ry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'jarjesto',
        value: 'tyk',
        name: 'TYK ry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'jarjesto',
        value: 'nucleus',
        name: 'Nucleus ry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'jarjesto',
        value: 'statistica',
        name: 'Statistica ry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Speksis
      {
        key: 'speksi',
        value: 'hybridispeksi',
        name: 'HybridiSpeksi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'speksi',
        value: 'iospeksi',
        name: 'I/O-Speksi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'speksi',
        value: 'humanistispeksi',
        name: 'Humanistispeksi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'speksi',
        value: 'tukyspeksi',
        name: 'TuKY-Speksi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'speksi',
        value: 'tlksspeksi',
        name: 'TLKS Speksi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'speksi',
        value: 'akademiska',
        name: 'Akademiska spexed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'speksi',
        value: 'lexspeks',
        name: 'Lex Spex',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Control', null, {});
  },
};
