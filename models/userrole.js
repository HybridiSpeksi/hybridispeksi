
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
  }, {});
  UserRole.associate = (models) => {
    UserRole.hasOne(models.Role);
    UserRole.hasOne(models.User);
  };
  return UserRole;
};
