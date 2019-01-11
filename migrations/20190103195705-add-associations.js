
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
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
          'UserRoles',
          'userId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'Users',
              key: 'id',
              as: 'userId',
            },
          },
        );
      })
      .then(() => {
        return queryInterface.addColumn(
          'UserRoles',
          'roleId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'Roles',
              key: 'id',
              as: 'roleId',
            },
          },
        );
      });
    // .then(() => {
    //   return queryInterface.addColumn(
    //     'Members',
    //     'contactInfoId',
    //     {
    //       type: Sequelize.UUID,
    //       references: {
    //         model: 'ContactInfos',
    //         key: 'id',
    //       },
    //       onDelete: 'CASCADE',
    //     },
    //   );
    // })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'contactInfoId',
    )
      .then(() => {
        return queryInterface.removeColumn(
          'UserRoles',
          'userId',
        );
      })
      .then(() => {
        return queryInterface.removeColumn(
          'UserRoles',
          'roleId',
        );
      });
  },
};
