const router = require('express').Router();
const auth = require('./auth')
const produktionjasen = require('./produktio/produktionjasen');

const index = require('./index/index');

    router.get('/', index.test);


    // Produktion jäsenet
    router.get('/produktionjasen', auth.isLoggedIn, produktionjasen.getAll);
    router.get('/produktionjasen/:_id', produktionjasen.getById);
    router.post('/produktionjasen', produktionjasen.newJasen);
    
    // Jäsenrekisteri
    

module.exports = router;