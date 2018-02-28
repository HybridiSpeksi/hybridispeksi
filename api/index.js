const router = require('express').Router();
const auth = require('./auth')
const produktionjasen = require('./produktio/produktionjasen');
const ohjaustiedot = require('./ohjaustiedot/ohjaustiedot');
const jasenrekisteri = require('./jasenrekisteri/jasenrekisteri');
const user = require('./admin/user');
const ilmo = require('./ilmo/ilmo');
const tapahtuma = require('./ilmo/tapahtuma');
const esitys = require('./esitykset/esitykset');
const varaus = require('./esitykset/varaukset');
const maksu = require('./esitykset/maksut');

const index = require('./index/index');


router.all('/admin*', user.checkToken);
router.all('/admin/h/*', user.isHallitus);
router.all('/admin/w/*', user.isWebmaster)

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

// Jäsenrekisteri
router.get('/admin/h/jasenrekisteri', jasenrekisteri.getAll);
router.post('/admin/h/jasenrekisteri', jasenrekisteri.muokkaaJasen);
router.get('/admin/h/hyvaksyJasen/:_id', jasenrekisteri.hyvaksyJasen);
router.put('/admin/h/jasenrekisteri', jasenrekisteri.newJasen);

// Käyttäjät

router.post('/authenticate', user.authenticate);
router.post('/signup', user.newUser);
router.get('/isValidToken', user.isValidToken);
router.get('/admin/w/kayttajat', user.getUsers);
router.post('/admin/w/kayttaja', user.updateUser)
router.delete('/admin/w/kayttaja/:_id', user.deleteUser)
// router.post('/uusiKayttaja', user.newUser);

// Tapahtumat
router.get('/admin/tapahtumat', tapahtuma.getAll);
router.put('/ilmo', ilmo.newIlmo);
router.get('/admin/ilmo/:value', ilmo.getAll);
router.get('/ilmo/:value', ilmo.getAllPublic);
router.post('/ilmo', ilmo.updateIlmo);
router.delete('/ilmo', ilmo.removeIlmo);

// Esitykset
router.get('/esitykset', esitys.getAll);
router.get('/getShowsWithCounts', esitys.getAllWithBookingCounts);
router.get('/esitykset/:value', varaus.getAll);
router.delete('esitykset', varaus.remove);
router.get('/admin/varaukset/:_id', varaus.getAll);
router.get('/getOneVarausById/:_id', varaus.getOneById);
router.post('/admin/varaus', varaus.createNewAdmin);
router.put('/admin/varaus/:_id', varaus.update);
router.delete('/admin/varaus/:_id', varaus.remove);
router.post('/varaus/createPayment', varaus.createPayment);

// Maksut
router.get('/payment/success', maksu.handleSuccess);
router.get('/payment/failure', maksu.handleFailure);

module.exports = router;