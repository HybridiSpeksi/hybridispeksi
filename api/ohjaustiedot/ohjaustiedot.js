const Ohjaustieto = require('../../schema/ohjaustieto-model');
module.exports =  {
    haeTehtavat: (req, res) => {
        Ohjaustieto.find({key: "tehtava"})
        .then(tehtavat => {
            res.json({success: true, data: tehtavat})
        })
        .catch(err => {
            res.json({success: false, data: err})
        })
    },

    haeJarjestot: (req, res) => {
        console.log("haejarjestot")
        Ohjaustieto.find({key: "jarjesto"})
        .then(jarjestot => {
            res.json({success: true, data: jarjestot})
        })
        .catch(err => {
            console.log(err);
            res.json({success: false, data: err})
        })
    }
}