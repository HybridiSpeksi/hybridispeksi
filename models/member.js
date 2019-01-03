module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    approved: DataTypes.BOOLEAN,
    joinDate: DataTypes.DATE,
    approveDate: DataTypes.DATE,
  }, {});
  Member.associate = function (models) {
    // associations can be defined here
  };
  return Member;
};
