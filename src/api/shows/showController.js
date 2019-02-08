const showService = require('../../services/showService');


module.exports = {
  createShow: async (req, res) => {
    const {
      date, limit, nameLong, nameShort,
    } = req.body;
    try {
      await showService.createShow(date, limit, nameLong, nameShort);
      res.status(200).send();
    } catch (e) {
      console.log(e);
      res.status(500).send('Palvelimella tapahtui virhe');
    }
  },

  deleteShow: async (req, res) => {
    try {
      await showService.deleteShow(req.params.showId);
      res.status(200).send();
    } catch (e) {
      console.log(e);
      res.status(500).send('Palvelimella tapahtui virhe');
    }
  },

  updateShow: async (req, res) => {
    const {
      date, limit, nameLong, nameShort,
    } = req.body;
    const id = req.params.showId;
    try {
      const show = await showService.updateShow(id, date, limit, nameLong, nameShort);
      res.status(200).send(show);
    } catch (e) {
      console.log(e);
      res.status(500).send('Palvelimella tapahtui virhe');
    }
  },

  getShows: async (req, res) => {
    try {
      const shows = await showService.getShows();
      res.status(200).send(shows);
    } catch (e) {
      console.log(e);
      res.status(500).send('Palvelimella tapahtui virhe');
    }
  },

};
