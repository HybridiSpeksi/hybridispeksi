const eventService = require('../../services/eventService');
const validator = require('../../utils/validation');

const validateEvent = ({ name, limit, date }) => {
  if (validator.isEmptyOrNull(name)) {
    throw new Error('Tapahtumalla on oltava nimi');
  }
  if (!validator.isNumber(limit)) {
    throw new Error('Rajan on oltava numero');
  }
};


module.exports = {
  createEvent: async (req, res) => {
    const {
      name, limit, date, registrationOpen,
    } = req.body;
    try {
      validateEvent(req.body);
      const event = await eventService.createEvent(name, limit, date, registrationOpen);
      res.json({ success: true, data: event });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  getEvents: async (req, res) => {
    try {
      const events = await eventService.getEvents();
      res.json({ success: true, data: events });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  deleteEvent: async (req, res) => {
    const { eventId } = req.params;
    try {
      await eventService.deleteEvent(eventId);
      res.json({ success: true });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  updateEvent: async (req, res) => {
    const { eventId } = req.params;
    const {
      name, limit, date, registrationOpen,
    } = req.body;
    try {
      validateEvent(req.body);
      const event = await eventService.updateEvent(eventId, name, limit, date, registrationOpen);
      res.json({ success: true, data: event });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  getEventById: async (req, res) => {
    const { eventId } = req.params;
    try {
      const event = await eventService.getEventById(eventId);
      res.json({ success: true, data: event });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  openRegistration: async (req, res) => {
    const { eventId } = req.params;
    try {
      const event = await eventService.openRegistration(eventId);
      res.json({ success: true, data: event });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  closeRegistration: async (req, res) => {
    const { eventId } = req.params;
    try {
      const event = await eventService.closeRegistration(eventId);
      res.json({ success: true, data: event });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },
};
