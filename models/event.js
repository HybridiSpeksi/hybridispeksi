

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    limit: DataTypes.INTEGER,
    date: DataTypes.DATE,
    registrationOpen: DataTypes.BOOLEAN,
  }, {});
  Event.associate = function (models) {
  };
  return Event;
};
