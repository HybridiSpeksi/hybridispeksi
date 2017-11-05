const Ilmo = require('../../schema/ilmo-model');

module.exports = {
    getAll: (req, res) => {
        Ilmo.find({tapahtuma: req.params.value})
        .then(_data => {
            res.json({success: true, data: _data})
        })
        .catch(err => {
            res.json({success: false, data: err})
        })
    },

    getAllPublic: (req, res) => {
        Ilmo.find({tapahtuma: req.params.value}, {
                        fname: 1, 
                        sname: 1, 
                        alterego: 1, 
                        jarjesto: 1, 
                        _id: 0})
        .then(_data => {
            res.json({success: true, data: _data})
        })
        .catch(err => {
            res.json({success: false, data: err})
        })
    },

    newIlmo: (req, res) => {
        let osallistuja = new Ilmo({
            tapahtuma: req.body.tapahtuma,
            fname: req.body.fname,
            sname: req.body.sname,
            email: req.body.email,
            jarjesto: req.body.jarjesto,
            juoma: req.body.juoma,
            ruokavalio: req.body.ruokavalio,
            alterego: req.body.alterego,
            ilmoAika: new Date()
        })
        osallistuja.save()
            .then(osallistuja => {
                res.jason({ success: true, data: osallistuja });
            }) 
            .catch(err => {
                res.json({ success: false, data: err });
            })
    },

    removeIlmo: (req, res) => {
        let osallistuja = req.body;
        Ilmo.findByIdAndRemove(osallistuja._id, osallistuja)
            .then(osallistuja => {
                res.json({ success: true, data: osallistuja })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    },

    updateIlmo: (req, res) => {
        let osallistuja = req.body;
        Ilmo.findByIdAndUpdate(osallistuja._id, osallistuja)
            .then(osallistuja => {
                res.json({ success: true, data: osallistuja })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    }
}
