const Tapahtuma = require('../../schema/tapahtuma-model');
module.exports = {
    getAll: (req, res) => {
        Tapahtuma.find()
        .then(_data => {
            res.json({success: true, data: _data})
        })
        .catch(err => {
            res.json({success: false, data: err})
        })
    }
}