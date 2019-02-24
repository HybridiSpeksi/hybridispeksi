

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Bookings',
      'showId',
      {
        type: Sequelize.UUID,
        references: {
          model: 'Shows',
          key: 'id',
          as: 'showId',
        },
        onDelete: 'CASCADE',
      },
    )
      .then(() => {
        return queryInterface.addColumn(
          'Bookings',
          'contactInfoId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'ContactInfos',
              key: 'id',
              as: 'contactInfoId',
            },
            onDelete: 'CASCADE',
          },
        );
      })
      .then(() => {
        return queryInterface.addColumn(
          'Bookings',
          'paymentMethodId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'PaymentMethods',
              key: 'id',
              as: 'paymentMethodId',
            },
            onDelete: 'CASCADE',
          },
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Bookings',
      'showId',
    )
      .then(() => {
        return queryInterface.removeColumn(
          'Bookings',
          'contactInfoId',
        );
      })
      .then(() => {
        return queryInterface.removeColumn(
          'Bookings',
          'paymentMethodId',
        );
      });
  },
};
