const Jasenrekisteri = require('../../schema/jasen-model');
module.exports = {
    getAll: (req, res) => {
        Jasenrekisteri.find()
        .then(_data => {
            res.json({success: true, data: _data})
        })
        .catch(err => {
            res.json({success: false, data: err})
        })
    }
}