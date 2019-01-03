
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    value: DataTypes.STRING,
  }, {});
  Role.associate = (models) => {

  };
  return Role;
};
