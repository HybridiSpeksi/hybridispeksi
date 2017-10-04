const jwt = require('jsonwebtoken');
const User = require('../../schema/user-model');
const sha1 = require('sha1');
const config = require('../../config');

function newUser(req, res) {
    let userJson = req.body;
    let user = new User({
        fname: userJson.fname,
        sname: userJson.sname,
        email: userJson.email,
        password: sha1(userJson.password),
        role: config.EI_HYVAKSYTTY
    })
    user.save()
        .then(user => {
            res.json({ success: true, data: user })
        })
        .catch(err => {
            res.json({ success: false, data: err });
        })
}

function updateUser(req, res) {

}

function getUsers(req, res) {
    User.find()
        .then(function (users) {
            res.json({ success: true, data: users });
        })
}

function isValidToken(req, res) {
    /* if (process.env.NODE_ENV === "develop") {
        res.json({ success: true, message: 'In develop mode, token not required' });
    } */
    const token = req.body.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Virheellinen token' })
            } else {
                req.decoded = decoded;
                res.json({ success: true, message: 'Validi token' });
            }
        })
    } else {
        res.status(403).send({
            success: false,
            message: 'Tokenia ei saatu'
        })
    }
}

function checkToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Virheellinen token' })
            } else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        res.status(403).send({
            success: false,
            message: 'Tokenia ei saatu'
        })
    }
}

function authenticate(req, res, next) {

    User.findOne({
        email: req.body.email
    })
        .catch(function (err) {
            res.json({ success: false, message: 'Error in getting user.' });
        })
        .then(function (user) {
            console.log(user)
            if (!user) {
                res.json({ message: 'Käyttäjää ei löytynyt' });
            } else if (user.password != sha1(req.body.password)) {
                res.json({ message: 'Virheellinen salasana' });
            } else if (user.role === config.EI_HYVAKSYTTY) {
                res.json({ success: false, message: 'Käyttäjää ei ole vielä hyväksytty' })
            } else {
                const token = jwt.sign(user.toObject(), process.env.SECRET, {
                    expiresIn: '1h', // expires in 1 hours
                });
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token,
                    user: user
                });
            }
        })

}

module.exports.newUser = newUser;
module.exports.authenticate = authenticate;
module.exports.getUsers = getUsers;
module.exports.updateUser = updateUser;
module.exports.checkToken = checkToken;
module.exports.isValidToken = isValidToken;