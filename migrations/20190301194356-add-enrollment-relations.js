

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Enrollments',
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
    )
      .then(() => {
        return queryInterface.addColumn(
          'Enrollments',
          'eventId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'Events',
              key: 'id',
              as: 'eventId',
            },
            onDelete: 'CASCADE',
          },
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Enrollments',
      'contactInfoId',
    )
      .then(() => {
        return queryInterface.removeColumn(
          'Enrollments',
          'eventId',
        );
      });
  },
};
