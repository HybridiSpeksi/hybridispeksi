const enrollmentService = require('../../services/enrollmentService');
const eventService = require('../../services/eventService');
const validator = require('../../utils/validation');
const mailer = require('../../utils/mailer');

const validateEnrollment = (enrollment) => {
  const {
    fname, lname, email, pnumber,
  } = enrollment.ContactInfo;
  if (validator.isEmptyOrNull(fname)) {
    throw new Error('Etunimi on pakollinen');
  }
  if (validator.isEmptyOrNull(lname)) {
    throw new Error('Sukunimi on pakollinen');
  }
  if (validator.isEmptyOrNull(email)) {
    throw new Error('Sähköposti on pakollinen');
  }
  if (!validator.isValidEmail(email)) {
    throw new Error('Sähköposti on virheellinen');
  }
};

module.exports = {
  createEnrollment: async (req, res) => {
    try {
      const { eventId } = req.body;
      const enrollmentCount = await enrollmentService.getEnrollmentCountByEventId(eventId);
      const event = await eventService.getEventById(eventId);
      const limit = event.get('limit');
      if (event.get('registrationOpen')) {
        throw new Error('Tapahtuman ilmoittautuminen on suljettu.');
      }
      if (enrollmentCount >= limit) {
        throw new Error('Tapahtuma on täynnä eikä siihen voi enää ilmoittautua.');
      }
      validateEnrollment(req.body);
      mailer.sendVujuConfirmation(req.body.ContactInfo.email);
      const enrollment = await enrollmentService.createEnrollment(req.body);
      res.json({ success: true, data: enrollment });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  deleteEnrollment: async (req, res) => {
    try {
      const id = req.params.enrollmentId;
      await enrollmentService.deleteEnrollment(id);
      res.json({ success: true });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  updateEnrollment: async (req, res) => {
    try {
      validateEnrollment(req.body);
      const newObject = { ...req.body, id: req.params.enrollmentId };
      console.log(newObject);
      const enrollemnt = await enrollmentService.updateEnrollment(newObject);
      res.json({ success: true, data: enrollemnt });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  getEnrollmentsByEventId: async (req, res) => {
    try {
      const eventId = req.params.eventId;
      const enrollments = await enrollmentService.getEnrollmentsByEventId(eventId);
      res.json({ success: true, data: enrollments });
    } catch (e) {
      res.json({ success: true, message: e.message });
    }
  },
};
