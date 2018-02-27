const Varaus = require('../../schema/varaus-model');
const payment = require('../../utils/payments');
const mailer = require('../../utils/mailer');

module.exports = {
    handleSuccess: (req, res) => {
        Varaus.update({_id: req.query.ORDER_NUMBER}, {paid: true})
        .then(_booking => {
            res.redirect('/vahvistus/' + _booking._id)
        })
        res.status(200).send();
    },

    handleFailure: (req, res) => {

    }
}