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
    }
}