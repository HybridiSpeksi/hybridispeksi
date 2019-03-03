const uuid = require('uuid/v4');
const Event = require('../../models').Event;

module.exports = {
  createEvent: async (name, limit, date, registrationOpen) => {
    try {
      const event = await Event.create({
        id: uuid(),
        name,
        limit,
        date,
        registrationOpen,
      });
      return event;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  getEvents: async () => {
    try {
      const events = await Event.findAll();
      return events;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  deleteEvent: async (id) => {
    try {
      await Event.destroy({ where: { id } });
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  updateEvent: async (id, name, limit, date, registrationOpen) => {
    try {
      const event = await Event.findOne({ where: { id } });
      event.set('name', name);
      event.set('limit', limit);
      event.set('date', date);
      event.set('registrationOpen', registrationOpen);
      await event.save();
      return event;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};
