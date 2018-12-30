

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    contactInfoId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: 'ContactInfo',
      referenceKey: 'id',
    }
  }, {});
  Users.associate = (models) => {
    Users.hasOne(models.ContactInfo, {
      foreignKey: 
    });
  };
  return Users;
};
