const Varaus = require('../../schema/varaus-model');
const Esitys = require('../../schema/esitys-model');
const mailer = require('../../utils/mailer');
const payment = require('../../utils/payments');

module.exports = {
    getAll: (req, res) => {
        Varaus.find({esitysId: req.params._id, year: 2018})
        .then(_data => {
            res.json({success: true, data: _data})
        })
        .catch(err => {
            res.json({success: false, data: err})
        })
    },

    createNewAdmin: (req, res) => {
        let booking = req.body;
        validateAdmin(booking)
        .then(() => {
            return tryIfSpace(booking)
        })
        .then(() => {
            booking.bookingId = generateId();
            const bookingObj = new Varaus({
                fname: booking.fname,
                sname: booking.sname,
                email: booking.email,
                pnumber: booking.pnumber,
                scount: booking.scount || 0,
                ncount: booking.ncount || 0,
                ocount: booking.ocount || 0,
                oprice: booking.oprice || 0,
                paymentMethod: booking.paymentMethod,
                paid: booking.paid,
                esitysId: booking.esitysId,
                additional: booking.additional,
                bookingId: booking.bookingId,
                year: 2018
            })
            return bookingObj.save()
        })
        .then(_booking => {
            return Esitys.findOne({_id: booking.esitysId})
        })
        .then(_esitys => {
            booking.esitys = _esitys;
            mailer.sendTicket(booking);
        })
        .then(_booking => {
            res.json({success: true, data: _booking});
        })
        .catch(err => {
            if(err.code) {
                res.json({success: false, data: err.message}, err.code);
            } else 
                console.log(err);
        })
       
    },

    update: (req, res) => {
        let varaus = req.body;
        console.log(varaus)
        Varaus.findByIdAndUpdate(varaus._id, varaus)
            .then(_varaus => {
                res.json({ success: true, data: "Varaus päivitetty." })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    },

    remove: (req, res) => {
        Varaus.remove({_id: req.params._id})
        .then(() => {
            res.json({success: true, data: 'Varaus poistettu'});
        })
        .catch(err => {
            res.json({success: false, data: 'Varausta ei voitu poistaa'});
        })
    },

    createPayment: (req, res) => {
        let booking = req.body;
        validate(booking)
        .then(() => {
            return tryIfSpace(booking)
        })
        .then(() => {
            booking.bookingId = generateId();
            const bookingObj = new Varaus({
                fname: booking.fname,
                sname: booking.sname,
                email: booking.email,
                pnumber: booking.pnumber,
                scount: booking.scount || 0,
                ncount: booking.ncount || 0,
                ocount: booking.ocount || 0,
                oprice: 25,
                paymentMethod: 2,
                paid: false,
                esitysId: booking.esitysId,
                additional: booking.additional,
                bookingId: booking.bookingId,
                year: 2018
            })
            return bookingObj.save()
        })
        .then(_booking => {
            return payment.createPayment(_booking)
        })
        .then(payment => {
            console.log(payment);
            res.json({success: true, data: payment})
        })
        .catch(err => {
            if(err.code) {
                res.json({success: false, data: err.message}, err.code);
            } else 
                console.log(err);
        })
    },
}

function validateAdmin(booking) {
    let promise = new Promise((resolve, reject) => {
        if(isEmptyField(booking.email)) {
            reject({code: 400, message: 'Sähköposti on pakollinen tieto'})
        } else if (!isValidEmail(booking.email)) {
            reject({code: 400, message: 'Virheellinen sähköpostiosoite'});
        } else if(booking.ocount > 0 && booking.oprice < 10 && isEmptyField(booking.additional)) {
            reject({code: 400, message: 'Mikäli erikoislippujen hinta on alle 10€, on syy selvitettävä lisätietoihin'})
        } else {
            resolve();
        }
    })
    return promise;
}

function validate(booking) {
    let promise = new Promise((resolve, reject) => {
        if(isEmptyField(booking.fname) || isEmptyField(booking.sname) || isEmptyField(booking.email)) {
            reject({code: 400, message: 'Täytä kaikki puuttuvat kentät'})
        } else if (!isValidEmail(booking.email)) {
            reject({code: 400, message: 'Virheellinen sähköposti'})
        } else if (isEmptyField(booking.esitysId)) {
            reject({code: 400, message: 'Valitse esitys'})
        } else if (booking.scount + booking.ncount + booking.ocount == 0) {
            reject({code: 400, message: 'Varauksessa oltava vähintään yksi lippu'})
        } else {
            resolve();
        }
    })
    return promise;
}

function isValidEmail(email) {
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
        Varaus.find({esitysId: booking.esitysId, year: 2018})
        .then(data => {
            data.map(b => { totalCountInShow += getTotalCount(b) })
            if(totalCountInShow + getTotalCount(booking) > 130) {
                console.log('reject');
                reject({code: 400, message: 'Esityksessä ei ole tarpeeksi paikkoja jäljellä'});
            } else {
                resolve(booking);
            }
        }) 
    })
}

function getTotalCount(booking) {
    return Number(booking.ncount) + Number(booking.scount) + Number(booking.ocount);
}