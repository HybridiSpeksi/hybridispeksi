

module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollment', {
    presentGreeting: DataTypes.BOOLEAN,
    greetingOrganization: DataTypes.STRING,
    avec: DataTypes.STRING,
    partyExpectation: DataTypes.STRING,
    menu: DataTypes.STRING,
    diet: DataTypes.STRING,
    alcohol: DataTypes.BOOLEAN,
    sillis: DataTypes.BOOLEAN,
    memberOfSpeksi: DataTypes.BOOLEAN,
    paid: DataTypes.BOOLEAN,
    additional: DataTypes.STRING,
  }, {});
  Enrollment.associate = (models) => {
    Enrollment.belongsTo(models.ContactInfo, {
      foreignKey: 'contactInfoId',
      onDelete: 'CASCADE',
    });

    Enrollment.belongsTo(models.Event, {
      foreignKey: 'eventId',
      onDelete: 'CASCADE',
    });
  };
  return Enrollment;
};
