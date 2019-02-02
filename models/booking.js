

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    normalCount: DataTypes.INTEGER,
    discountCount: DataTypes.INTEGER,
    specialPriceCount: DataTypes.INTEGER,
    specialPrice: DataTypes.DECIMAL,
  }, {});
  Booking.associate = (models) => {
    Booking.belongsTo(models.Show, {
      foreignKey: 'showId',
      onDelete: 'CASCADE',
    });
    Booking.belongsTo(models.ContactInfo, {
      foreignKey: 'contactInfoId',
      onDelete: 'CASCADE',
    });
  };
  return Booking;
};
