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
        if(true) {
            Varaus.findOne({_id: req.query.ORDER_NUMBER})
            .then(_booking => {
                console.log(_booking);
                _booking.paid = true;
                booking = _booking;
                return _booking.save()
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
                if(err.ohjaustietoValue) {
                    res.redirect('/speksi2018/virhe/' + err.ohjaustietoValue);
                } else
                    res.redirect('/speksi2018/virhe/0')
            })
        } else {
            res.redirect('/speksi2018/virhe/2');
        }
    },

    handleFailure: (req, res) => {
        Varaus.remove({_id: req.query.ORDER_NUMBER})
        .then(() => {
            console.log('Booking removed with _id ' + req.query.ORDER_NUMBER);
            console.log('Payment event failed');
        })
        res.redirect('/speksi2018/virhe/1');
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