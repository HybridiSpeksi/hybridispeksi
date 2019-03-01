const router = require('express').Router();
const produktionjasen = require('./produktio/produktionjasen');
const ohjaustiedot = require('./ohjaustiedot/ohjaustiedot');
const jasenrekisteri = require('./jasenrekisteri/jasenrekisteri');
const user = require('./admin/user');
const palaute = require('./palautteet/palautteet');
const showController = require('./shows/showController');
const bookingController = require('./shows/bookingController');
const eventController = require('./events/eventController');


router.all('/admin*', user.checkToken);
router.all('/admin/h/*', user.isHallitus);
router.all('/admin/w/*', user.isWebmaster);

// Ohjaustiedot
router.get('/tehtavat', ohjaustiedot.haeTehtavat);
router.get('/jarjestot', ohjaustiedot.haeJarjestot);
router.get('/rekryAuki', ohjaustiedot.haeRekryAuki);
router.get('/admin/w/ohjaustieto', ohjaustiedot.haeOhjaustiedot);
router.delete('/admin/w/ohjaustieto/:_id', ohjaustiedot.poistaOhjaustieto);
router.post('/admin/w/ohjaustieto', ohjaustiedot.muokkaaOhjaustieto);
router.put('/admin/w/ohjaustieto', ohjaustiedot.lisaaOhjaustieto);
router.get('/admin/w/avaimet', ohjaustiedot.haeAvaimet);
router.get('/ohjaustieto/:key', ohjaustiedot.getByKey);
router.get('/price', ohjaustiedot.haeHinnat);
router.get('/lipunmyyntiAuki', ohjaustiedot.haeLipunmyyntiAuki);
router.get('/lipunmyyntiMessage', ohjaustiedot.haeLipunmyyntiMessage);

// Produktion jäsenet
router.get('/admin/produktionjasen/:vuosi', produktionjasen.getAll);
router.get('/produktionjasen/:_id', produktionjasen.getById);
router.put('/produktionjasen', produktionjasen.newJasen);
router.post('/admin/produktionjasen', produktionjasen.muokkaaJasen);
router.delete('/admin/w/produktionjasen/:_id', produktionjasen.remove);

// Jäsenrekisteri
router.get('/admin/h/jasenrekisteri', jasenrekisteri.getAll);
router.post('/admin/h/jasenrekisteri', jasenrekisteri.muokkaaJasen);
router.get('/admin/h/hyvaksyJasen/:_id', jasenrekisteri.hyvaksyJasen);
router.put('/admin/h/jasenrekisteri', jasenrekisteri.newJasen);
router.delete('/admin/h/jasenrekisteri/:_id', jasenrekisteri.remove);

// Users

router.post('/authenticate', user.authenticate);
router.post('/signup', user.newUser);
router.get('/isValidToken', user.isValidToken);
router.get('/admin/w/kayttajat', user.getUsers);
router.post('/admin/w/kayttaja', user.updateUser);
router.delete('/admin/w/kayttaja/:id', user.deleteUser);
router.get('/admin/w/user/:userId', user.getUserById);
router.get('/admin/roles', user.getRoles);
router.get('/admin/w/role/:userId/:roleId', user.addRoleToUser);
router.delete('/admin/w/role/:userId/:roleId', user.removeRoleFromUser);
// router.post('/uusiKayttaja', user.newUser);

// Events
router.get('/events', eventController.getEvents);
router.post('/event', eventController.createEvent);
router.put('/event/:eventId', eventController.updateEvent);
router.delete('/event/:eventId', eventController.deleteEvent);

// Shows
router.get('/shows', showController.getShows);
router.post('/admin/h/show', showController.createShow);
router.delete('/admin/h/show/:showId', showController.deleteShow);
router.put('/admin/h/show/:showId', showController.updateShow);

// Bookings
router.get('/admin/bookings', bookingController.getAllBookings);
router.get('/admin/bookings/:showId', bookingController.getBookingsByShowId);
router.post('/admin/booking', bookingController.createBooking);
router.post('/booking', bookingController.createPublicBooking);
router.get('/booking/:bookingId', bookingController.getBookingById);
router.delete('/admin/booking/:bookingId', bookingController.deleteBooking);
router.put('/admin/booking/:bookingId', bookingController.updateBooking);
router.get('/payment/success', bookingController.handleSuccessfulPayment);
router.get('/payment/failure', bookingController.handleFailingPayment);
router.get('/payment/notify', bookingController.handleNotifyPayment);
router.get('/paymentmethods', bookingController.getPaymentMethods);


// Palautteet
router.get('/admin/palautteet', palaute.getAll);
router.post('/palaute', palaute.createNew);
router.get('/admin/h/vuodenspeksaaja', palaute.getVotes);
router.post('/vuodenspeksaaja', palaute.createVote);

module.exports = router;
