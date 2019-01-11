
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    value: DataTypes.INTEGER,
  }, {});
  Role.associate = (models) => {
    Role.belongsToMany(models.User, { through: 'UserRole', foreignKey: 'roleId', unique: false });
  };
  return Role;
};
