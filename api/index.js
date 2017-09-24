const router = require('express').Router();
const auth = require('./auth')
const produktionjasen = require('./produktio/produktionjasen');
const ohjaustiedot = require('./ohjaustiedot/ohjaustiedot');
const user = require('./admin/user');

const index = require('./index/index');


router.all('/admin*', user.checkToken);

router.get('/', index.test);

// Ohjaustiedot
router.get('/tehtavat', ohjaustiedot.haeTehtavat);
router.get('/jarjestot', ohjaustiedot.haeJarjestot);

// Produktion jäsenet
router.get('/admin/produktionjasen', produktionjasen.getAll);
router.get('/produktionjasen/:_id', produktionjasen.getById);
router.post('/produktionjasen', produktionjasen.newJasen);

// Jäsenrekisteri

// Käyttäjät

router.post('/authenticate', user.authenticate);
router.post('/signup', user.newUser);
router.get('/isValidToken', user.isValidToken);
router.get('/admin/kayttajat', user.getUsers);
// router.post('/uusiKayttaja', user.newUser);


module.exports = router;