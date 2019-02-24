

module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    date: DataTypes.DATE,
    limit: DataTypes.INTEGER,
    nameLong: DataTypes.STRING,
    nameShort: DataTypes.STRING,
    bookingCount: DataTypes.VIRTUAL,
  }, {});
  Show.associate = function (models) {
    Show.hasMany(models.Booking, { as: 'Bookings', foreignKey: 'showId' });
  };
  return Show;
};
