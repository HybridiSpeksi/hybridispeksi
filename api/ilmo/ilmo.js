const Ilmo = require('../../schema/ilmo-model');

module.exports = {
    getAll: (req, res) => {
        Ilmo.find({})
        .then(_data => {
            res.json({success: true, data: _data})
        })
        .catch(err => {
            res.json({success: false, data: err})
        })
    },

    getAllPublic: (req, res) => {
        Ilmo.find({}, {fname: 1, sname: 1, _id: 0})
        .then(_data => {
            res.json({success: true, data: _data})
        })
        .catch(err => {
            res.json({success: false, data: err})
        })
    },

    newIlmo: (req, res) => {
        
    },

    removeIlmo: (req, res) => {

    },

    updateIlmo: (req, res) => {

    }
}
