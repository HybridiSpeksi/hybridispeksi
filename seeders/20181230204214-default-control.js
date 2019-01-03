
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Control', [
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

      // Occupations
      {
        key: 'tehtava',
        value: 'grafiikka',
        name: 'Grafiikka',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'kuvaus',
        name: 'Kuvaus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'puvustus',
        name: 'Puvustus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'maskeeraus',
        name: 'Maskeeraus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'lavastus',
        name: 'Lavastus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'varainhankinta',
        name: 'Varainhankinta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'nayttelija',
        name: 'Näyttelijä',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'bandi',
        name: 'Bändi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'tanssija',
        name: 'Tanssija',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'kasikirjoitus',
        name: 'Käsikirjoitus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'hallitus',
        name: 'Hallitus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'tuotanto',
        name: 'Tuotanto',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'webmaster',
        name: 'Webmaster',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'huoltotiimi',
        name: 'Huolto- ja virkistys',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'tehtava',
        value: 'tekniikka',
        name: 'Ääni- ja valotekniikka',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Control flags
      {
        key: 'rekryAuki',
        value: 'false',
        bool: false,
        name: 'rekryAuki',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'lipunmyyntiAuki',
        value: 'false',
        bool: false,
        name: 'lipunmyyntiAuki',
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
