
module.exports = (sequelize, DataTypes) => {
  const Control = sequelize.define('Control', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    key: DataTypes.STRING,
    value: DataTypes.STRING,
    bool: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
  }, {});
  Control.associate = function (models) {
    // associations can be defined here
  };
  return Control;
};
