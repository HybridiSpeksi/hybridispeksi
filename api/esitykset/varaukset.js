const Varaus = require('../../schema/varaus-model');
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