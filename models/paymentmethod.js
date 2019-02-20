

module.exports = (sequelize, DataTypes) => {
  const PaymentMethod = sequelize.define('PaymentMethod', {
    name: DataTypes.STRING,
    code: DataTypes.INTEGER,
  }, {});
  PaymentMethod.associate = function (models) {
    PaymentMethod.hasMany(models.Booking, { as: 'Bookings', foreignKey: 'paymentMethodId' });
  };
  return PaymentMethod;
};
