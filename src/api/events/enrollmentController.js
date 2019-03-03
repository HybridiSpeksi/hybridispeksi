const enrollmentService = require('../../services/enrollmentService');
const validator = require('../../utils/validation');
const mailer = require('../../utils/mailer');

const validateEnrollment = (enrollemnt) => {
  const {
    fname, lname, email, pnumber,
  } = enrollemnt.ContactInfo;
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
      const newObject = { ...req.body, id: req.params.id };
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
