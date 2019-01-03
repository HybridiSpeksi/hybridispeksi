module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    password: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    User.hasOne(models.ContactInfo);
  };
  return User;
};
