
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    value: DataTypes.INTEGER,
  }, {});
  Role.associate = (models) => {

  };
  return Role;
};
