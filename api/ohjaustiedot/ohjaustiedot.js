const Ohjaustieto = require('../../schema/ohjaustieto-model');
module.exports = {
    haeTehtavat: (req, res) => {
        Ohjaustieto.find({ key: "tehtava" })
            .then(tehtavat => {
                res.json({ success: true, data: tehtavat })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    },

    haeJarjestot: (req, res) => {
        Ohjaustieto.find({ key: "jarjesto" })
            .then(jarjestot => {
                res.json({ success: true, data: jarjestot })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    },

    haeRekryAuki: (req, res) => {
        Ohjaustieto.find({ key: "rekryAuki" })
            .then(tag => {
                res.json({ success: true, data: tag })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    },
    haeLipunmyyntiAuki: (req, res) => {
        Ohjaustieto.find({ key: "lipunmyyntiAuki" })
            .then(tag => {
                res.json({ success: true, data: tag })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    },

    haeOhjaustiedot: (req, res) => {
        Ohjaustieto.find()
            .then(_data => {
                res.json({ success: true, data: _data })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    },

    poistaOhjaustieto: (req, res) => {
        Ohjaustieto.remove({ _id: req.params._id })
            .then(_data => {
                res.json({ success: true, data: _data })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    },

    muokkaaOhjaustieto: (req, res) => {
        Ohjaustieto.findByIdAndUpdate(req.body._id, req.body)
            .then(_data => {
                res.json({ success: true, data: _data })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    },

    lisaaOhjaustieto: (req, res) => {
        let ohjaustieto = new Ohjaustieto({
            key: req.body.key,
            value: req.body.value,
            name: req.body.name,
            trueFalse: req.body.trueFalse
        })
        ohjaustieto.save()
            .then(_data => {
                res.json({ success: true, data: _data })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    },

    haeAvaimet: (req, res) => {
        Ohjaustieto.aggregate([{$group: {_id: "$key"}}])
        .then(_data => {
            _data.map(i => {
                i.value = i._id;
                i.name = i._id;
            })
            res.json({ success: true, data: _data })
        })
        .catch(err => {
            res.json({ success: false, data: err })
        })
    },

    getByKey: (req, res) => {
        Ohjaustieto.find({key: req.params.key})
        .then(_data => {
            res.json({ success: true, data: _data })
        })
        .catch(err => {
            res.json({ success: false, data: err })
        })
    },
    haeHinnat: (req,res) => {
        Ohjaustieto.find({key: "hinta"})
            .then(hinnat => {
                res.json({ success: true, data: hinnat })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    }
}