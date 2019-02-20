

module.exports = (sequelize, DataTypes) => {
  const PaymentMethod = sequelize.define('PaymentMethod', {
    name: DataTypes.STRING,
    code: DataTypes.INTEGER,
  }, {});
  PaymentMethod.associate = function (models) {
    // associations can be defined here
  };
  return PaymentMethod;
};
