const Esitys = require('../../schema/esitys-model');
const Varaus = require('../../schema/varaus-model');

module.exports = {
    getAll: (req, res) => {
        Esitys.find({})
        .then(_data => {
            res.json({success: true, data: _data})
        })
        .catch(err => {
            res.json({success: false, data: err})
        })
    },

    getAllWithBookingCounts: (req, res) => {
        Esitys.find()
        .then(shows => {
            Varaus.find()
        })
        .then()
    }
}