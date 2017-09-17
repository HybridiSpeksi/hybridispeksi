const router = require('express').Router();
const produktionjasen = require('./produktio/produktionjasen');

const index = require('./index/index');

    router.get('/', index.test);


    // Produktion jäsenet
    router.get('/produktionjasen', produktionjasen.getAll);
    router.get('/produktionjasen/:_id', produktionjasen.getById);
    
    // Jäsenrekisteri
    

module.exports = router;