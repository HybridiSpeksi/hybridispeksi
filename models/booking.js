

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    normalCount: DataTypes.INTEGER,
    discountCount: DataTypes.INTEGER,
    specialPriceCount: DataTypes.INTEGER,
    specialPrice: DataTypes.DECIMAL,
    tag: DataTypes.STRING,
    redeemed: DataTypes.BOOLEAN,
    paid: DataTypes.BOOLEAN,
    additionalInfo: DataTypes.STRING,
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
    Booking.belongsTo(models.PaymentMethod, {
      foreignKey: 'paymentMethodId',
      onDelete: 'CASCADE',
    });
  };
  return Booking;
};
