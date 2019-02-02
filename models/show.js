

module.exports = (sequelize, DataTypes) => {
  const show = sequelize.define('Show', {
    date: DataTypes.DATE,
    limit: DataTypes.INTEGER,
    nameLong: DataTypes.STRING,
    nameShort: DataTypes.STRING,
  }, {});
  show.associate = function (models) {
  };
  return show;
};
