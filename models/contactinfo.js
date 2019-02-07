
module.exports = (sequelize, DataTypes) => {
  const ContactInfo = sequelize.define('ContactInfo', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    pnumber: DataTypes.STRING,
    hometown: DataTypes.STRING,
    memberOfTyy: DataTypes.BOOLEAN,
  }, {});
  ContactInfo.associate = function (models) {
    // associations can be defined here
  };
  return ContactInfo;
};
