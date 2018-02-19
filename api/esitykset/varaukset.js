const Varaus = require('../../schema/varaus-model');
const Esitys = require('../../schema/esitys-model');
const mailer = require('../../utils/mailer');

module.exports = {
    getAll: (req, res) => {
        Varaus.find({esitysId: req.params._id})
        .then(_data => {
            res.json({success: true, data: _data})
        })
        .catch(err => {
            res.json({success: false, data: err})
        })
    },



    createNew: (req, res) => {
        let booking = req.body;
        validate(booking)
        .then(() => {
            tryIfSpace(booking)
        })
        .then(() => {
            booking.bookingId = generateId();

        })
        .then()
        .catch(err => {
            res.status(err.code).send(err.message);
        })
       
    },

    update: (req, res) => {

    },

    remove: (req, res) => {

    },

    sendTestMail: (req, res) => {
        let booking = {email: 'pymapa@utu.fi'}
        mailer.sendTicket(booking);
        res.status(200).send();
    }
}

function validate(booking) {
    let promise = new Promise((resolve, reject) => {
        if(isEmptyField(booking.fname) || isEmptyField(booking.sname) || isEmptyField(booking.email)) {
            reject({code: 400, message: 'Täytä kaikki puuttuvat kentät'})
        } else if (!validateEmail(booking.email)) {
            reject({code: 400, message: 'Virheellinen sähköposti'})
        } else if (isEmptyField(booking.esitysId)) {
            reject({code: 400, message: 'Valitse esitys'})
        }
        
    })

    return promise;
    // let validointiViesti = "";
    let valid = false;
    if (!req.body.fname || req.body.fname == "") {
        validointiViesti = "Täytä puuttuvat kentät"
    } else if (!req.body.sname || req.body.sname == "") {
        validointiViesti = "Täytä puuttuvat kentät"
    } else if (!validoiEmail(req.body.email)) {
        validointiViesti = "Täytä puuttuvat kentät tai korjaa virheelliset tiedot"
    } else if (!req.body.esitysId || req.body.esitysId == "") {
        validointiViesti = "Valitse esitys"
    } else if (parseInt(req.body.ocount) > 0 && parseInt(req.body.oprice) < 12 && req.body.additional == "") {
        validointiViesti = "Mikäli lipun hinta on alle 12€, on lisätietoihin annettava perustelu"
    } else if (julkinen && req.body.scount + req.body.ncount + req.body.ocount == 0) {
        validointiViesti = "Varauksessa oltava vähintään yksi lippu";
    }
    else valid = true;

    if (!valid) {
        res.status(400).send(validointiViesti);
    }
    return valid;
}

function validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function isEmptyField(field) {
    return !field || field === "";
}

function generateId() {
    let id = '';
    const possible = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
    for (var i = 0; i < 5; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
}

function tryIfSpace(booking) {
    return new Promise((resolve, reject) => {
        let totalCountInShow = 0;
        Varaus.find({bookingId: booking.bookingId})
        .then(data => {
            data.map(b => { totalCountInShow =+ getTotalCount(b) })
            if(totalCountInShow + getTotalCount(booking) > 130) {
                reject({code: 400, message: 'Esityksessä ei ole tarpeeksi paikkoja jäljellä'});
            } else {
                resolve(booking);
            }
        }) 
    })
}

function getTotalCount(booking) {
    return booking.ncount + booking.scount + booking.ocount;
}