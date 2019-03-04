const uuid = require('uuid/v4');
const transaction = require('sequelize').transaction;
const Event = require('../../models').Event;
const Enrollment = require('../../models').Enrollment;
const ContactInfoModel = require('../../models').ContactInfo;

module.exports = {
  createEnrollment: async ({
    ContactInfo,
    presentGreeting,
    greetingOrganization,
    avec,
    partyExpectation,
    menu,
    diet,
    alcohol,
    sillis,
    memberOfSpeksi,
    paid,
    additional,
    eventId,
  }) => {
    try {
      const {
        fname, lname, email, pnumber,
      } = ContactInfo;
      const t = await transaction;
      const event = await Event.findOne({ where: { id: eventId } }, { transaction: t });
      const contactInfo = await ContactInfoModel.create({
        id: uuid(),
        fname,
        lname,
        email,
        pnumber,
      }, { transaction: t });
      const enrollment = await Enrollment.create({
        id: uuid(),
        presentGreeting,
        greetingOrganization,
        avec,
        partyExpectation,
        menu,
        diet,
        alcohol,
        sillis,
        memberOfSpeksi,
        paid,
        additional,
        eventId: event.get('id'),
        contactInfoId: contactInfo.get('id'),
      });
      enrollment.set('Event', event);
      enrollment.set('ContactInfo', contactInfo);
      await enrollment.save({ transaction: t });
      return enrollment;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  deleteEnrollment: async (id) => {
    try {
      const enrollment = await Enrollment.findOne({ where: { id } });
      await ContactInfoModel.destroy({ where: { id: enrollment.get('contactInfoId') } });
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  getEnrollmentsByEventId: async (eventId) => {
    try {
      const enrollments = await Enrollment.findAll({
        include: [{ model: ContactInfoModel, as: 'ContactInfo' }],
        where: { eventId },
      });
      return enrollments;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  updateEnrollment: async ({
    id,
    ContactInfo,
    presentGreeting,
    greetingOrganization,
    avec,
    partyExpectation,
    menu,
    diet,
    alcohol,
    sillis,
    memberOfSpeksi,
    paid,
    additional,
  }) => {
    const {
      fname, lname, email, pnumber,
    } = ContactInfo;
    try {
      const t = await transaction;
      const enrollment = await Enrollment.findOne({ whrer: { id } });
      const contactInfo = await ContactInfoModel.findOne({ where: { id: enrollment.get('contactInfoId') } });
      contactInfo.set('fname', fname);
      contactInfo.set('lname', lname);
      contactInfo.set('email', email);
      contactInfo.set('pnumber', pnumber);
      await contactInfo.save({ transaction: t });
      enrollment.set('presentGreeting', presentGreeting);
      enrollment.set('greetingOrganization', greetingOrganization);
      enrollment.set('avec', avec);
      enrollment.set('partyExpectation', partyExpectation);
      enrollment.set('menu', menu);
      enrollment.set('diet', diet);
      enrollment.set('alcohol', alcohol);
      enrollment.set('sillis', sillis);
      enrollment.set('memberOfSpeksi', memberOfSpeksi);
      enrollment.set('paid', paid);
      enrollment.set('additional', additional);
      await enrollment.save({ transaction: t });
      return enrollment;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  findById: async (id) => {
    try {
      const enrollment = await Enrollment.findOne({
        whrer: { id },
        include: [{ model: ContactInfoModel, as: 'ContactInfo' }],
      });
      return enrollment;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  getEnrollmentCountByEventId: async (id) => {
    try {
      const count = Enrollment.count({
        where: { id },
      });
      return count;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};
