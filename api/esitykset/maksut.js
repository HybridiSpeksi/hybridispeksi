const Varaus = require('../../schema/varaus-model');
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

        if(checkValidity(params, authcode)) {
            Varaus.update({_id: req.query.ORDER_NUMBER}, {paid: true})
            .then(_booking => {
                mailer.sendTicket(_booking);
                res.redirect('/speksi2018/vahvistus/' + _booking._id)
            })
            res.status(200).send();
        }
    },

    handleFailure: (req, res) => {

    }
}

function checkValidity(params, authcode) {
    var hash = crypto.createHash('md5').update(params).digest('hex');
    var valid = false;
    if (hash.toUpperCase() === authcode.toUpperCase())
        return true;
    else
        return false;
}