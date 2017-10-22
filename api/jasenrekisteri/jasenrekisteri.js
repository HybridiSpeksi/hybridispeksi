const Jasenrekisteri = require('../../schema/jasen-model');
module.exports = {
    getAll: (req, res) => {
        Jasenrekisteri.find()
            .then(_data => {
                res.json({ success: true, data: _data })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    },

    newJasen: (req, res) => {
        let jasen = new Jasenrekisteri({
            fname: req.body.fname,
            sname: req.body.sname,
            email: req.body.email,
            approved: false,
            memberOfTyy: req.body.memberOfTyy,
            hometown: req.body.hometown,
            joinDate: new Date()
        })
        jasen.save()
            .then(jasen => {
                res.json({ success: true, data: jasen });
            })
            .catch(err => {
                res.json({ success: false, data: err });
            })
    },

    hyvaksyJasjen: (req, res) => {
        Jasenrekisteri.findByIdAndUpdate({ _id: req.params._id },
            { 
                approved: true,
                approveDate: new Date()
             })
            .then(jasen => {
                res.json({ success: true, data: jasen })
            })
            .catch(err => {
                res.json({ success: true, data: err })
            })
    },

    muokkaaJasen: (req, res) => {
        let jasen = req.body;
        Jasenrekisteri.findByIdAndUpdate(jasen._id, jasen)
            .then(jasen => {
                res.json({ success: true, data: jasen })
            })
            .catch(err => {
                res.json({ success: false, data: err })
            })
    }
}