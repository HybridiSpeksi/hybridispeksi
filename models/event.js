

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    limit: DataTypes.INTEGER,
    date: DataTypes.DATE,
  }, {});
  Event.associate = function (models) {
    // associations can be defined here
  };
  return Event;
};
