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
    }

}