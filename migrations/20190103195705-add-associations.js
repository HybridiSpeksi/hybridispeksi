
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'User',
      'contactInfoId',
      {
        type: Sequelize.UUID,
        references: {
          model: 'ContactInfo',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
    )
      .then(() => {
        return queryInterface.addColumn(
          'UserRole',
          'userId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'User',
              key: 'id',
            },
          },
        );
      })
      .then(() => {
        return queryInterface.addColumn(
          'UserRole',
          'roleId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'Role',
              key: 'id',
            },
          },
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'User',
      'contactInfoId',
    )
      .then(() => {
        return queryInterface.removeColumn(
          'UserRole',
          'userId',
        );
      })
      .then(() => {
        return queryInterface.removeColumn(
          'UserRole',
          'roleId',
        );
      });
  },
};
