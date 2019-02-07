module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    password: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    User.belongsTo(models.ContactInfo, {
      // as: 'ContactInfo',
      foreignKey: 'contactInfoId',
      onDelete: 'CASCADE',
    });
    User.belongsToMany(models.Role, {
      through: 'UserRole', foreignKey: 'userId', unique: false, onDelete: 'CASCADE',
    });
  };
  return User;
};
