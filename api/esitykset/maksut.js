const Varaus = require('../../schema/varaus-model');
const Esitys = require('../../schema/esitys-model');
const payment = require('../../utils/payments');
const mailer = require('../../utils/mailer');
const config = require('../../config');
var crypto = require('crypto');

module.exports = {
    handleSuccess: (req, res) => {
        const ordernumber = req.query.ORDER_NUMBER;
        const timestamp = req.query.TIMESTAMP;
        const paid = req.query.PAID;
        const method = req.query.METHOD;
        const authcode = req.query.RETURN_AUTHCODE;
        const params = ordernumber + "|" + timestamp + "|" + paid + "|" + method + "|" + config.kauppiasvarmenne;
        let booking;
        if(checkValidity(params, authcode)) {
            Varaus.findOne({_id: req.query.ORDER_NUMBER})
            .then(_booking => {
                _booking.paid = true;
                booking = _booking;
                return booking.save()
            })
            .then(() => {
                return Esitys.findOne({_id: booking.esitysId})
            })
            .then(_esitys => {
                booking.esitys = _esitys;
                return mailer.sendTicket(booking);
            })
            .then(() => {
                res.redirect('/speksi2018/vahvistus/' + booking._id)
            })
            .catch(err => {
                console.log(err);
                res.redirect('/speksi2018/virhe');
            })
        } else {
            res.redirect('/speksi2018/virhe');
        }
    },

    handleFailure: (req, res) => {

    }
}

function checkValidity(params, authcode) {
    var hash = crypto.createHash('md5').update(params).digest('hex');
    var valid = false;
    if (hash.toUpperCase() === authcode.toUpperCase()) {
        console.log('valid');
        return true;
    }
    else
        return false;
}