const Tapahtuma = require('../../schema/tapahtuma-model');
module.exports = {
    getAll: (req, res) => {
        Tapahtuma.find().sort({aika: -1}).exec()
        .then(_data => {
            res.json({success: true, data: _data})
        })
        .catch(err => {
            res.json({success: false, data: err})
        })
    }
}