const router = require('express').Router();
const auth = require('./auth')
const produktionjasen = require('./produktio/produktionjasen');
const ohjaustiedot = require('./ohjaustiedot/ohjaustiedot');
const jasenrekisteri = require('./jasenrekisteri/jasenrekisteri');
const user = require('./admin/user');

const index = require('./index/index');


router.all('/admin*', user.checkToken);
router.all('/admin/h/*', user.isHallitus);
router.all('/admin/w/*', user.isWebmaster)

// Ohjaustiedot
router.get('/tehtavat', ohjaustiedot.haeTehtavat);
router.get('/jarjestot', ohjaustiedot.haeJarjestot);
router.get('/rekryAuki', ohjaustiedot.haeRekryAuki);

// Produktion jäsenet
router.get('/admin/produktionjasen/:vuosi', produktionjasen.getAll);
router.get('/produktionjasen/:_id', produktionjasen.getById);
router.put('/produktionjasen', produktionjasen.newJasen);
router.post('/admin/produktionjasen', produktionjasen.muokkaaJasen);

// Jäsenrekisteri
router.get('/admin/h/jasenrekisteri', jasenrekisteri.getAll);

// Käyttäjät

router.post('/authenticate', user.authenticate);
router.post('/signup', user.newUser);
router.get('/isValidToken', user.isValidToken);
router.get('/admin/w/kayttajat', user.getUsers);
router.delete('/admin/w/kayttaja/:_id', user.deleteUser)
// router.post('/uusiKayttaja', user.newUser);


module.exports = router;