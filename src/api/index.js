const router = require('express').Router();
const produktionjasen = require('./produktio/produktionjasen');
const ohjaustiedot = require('./ohjaustiedot/ohjaustiedot');
const jasenrekisteri = require('./jasenrekisteri/jasenrekisteri');
const user = require('./admin/user');
const ilmo = require('./ilmo/ilmo');
const tapahtuma = require('./ilmo/tapahtuma');
const varaus = require('./esitykset/varaukset');
const maksu = require('./esitykset/maksut');
const palaute = require('./palautteet/palautteet');
const showController = require('./shows/showController');
const bookingController = require('./shows/bookingController');


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

// Tapahtumat
router.get('/admin/tapahtumat', tapahtuma.getAll);
router.put('/ilmo', ilmo.newIlmo);
router.get('/admin/ilmo/:value', ilmo.getAll);
router.get('/ilmo/:value', ilmo.getAllPublic);
router.post('/ilmo', ilmo.updateIlmo);
router.delete('/ilmo', ilmo.removeIlmo);

// Shows
router.get('/shows', showController.getShows);
router.post('/admin/h/show', showController.createShow);
router.delete('/admin/h/show/:showId', showController.deleteShow);
router.put('/admin/h/show/:showId', showController.updateShow);

// Bookings
router.get('/admin/bookings/:showId', bookingController.getBookingsByShowId);
router.post('/admin/booking', bookingController.createBooking);
router.post('/booking', bookingController.createPublicBooking);
router.delete('/admin/booking/:bookingId', bookingController.deleteBooking);
router.put('/admin/booking/:bookingId', bookingController.updateBooking);

// Varaukset
router.get('/admin/varaukset/:_id', varaus.getAllByShowId);
router.get('/admin/kaikkivaraukset', varaus.getAllList);
router.get('/getOneVarausById/:_id', varaus.getOneById);
router.post('/admin/varaus', varaus.createNewAdmin);
router.put('/admin/varaus/:_id', varaus.update);
router.put('/admin/redeem/:_id', varaus.redeem);
router.delete('/admin/varaus/:_id', varaus.remove);
router.post('/varaus/createPayment', varaus.createPayment);
router.get('/admin/varaus/sendConfirmationMail/:_id', varaus.sendConfirmationMail);

// Maksut
router.get('/payment/success', maksu.handleSuccess);
router.get('/payment/failure', maksu.handleFailure);
router.get('/payment/notify', maksu.handleNotify);

// Palautteet
router.get('/admin/palautteet', palaute.getAll);
router.post('/palaute', palaute.createNew);
router.get('/admin/h/vuodenspeksaaja', palaute.getVotes);
router.post('/vuodenspeksaaja', palaute.createVote);

module.exports = router;
