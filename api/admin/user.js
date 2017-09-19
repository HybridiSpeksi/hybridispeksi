const jwt = require('jsonwebtoken');
const User = require('../../schema/user-model');

function newUser(req, res) {

}

function getUsers(req, res) {
    User.find()
        .then(function (users) {
            res.json({ success: true, data: users });
        })
}

function authenticate(req, res) {
    User.findOne({
        email: req.body.email
    })
        .catch(function (err) {
            res.json({ success: false, message: 'Error in getting user.' });
        })
        .then(function (user) {
            if (!user) {
                res.json({ success: false, message: 'Käyttäjää ei löytynyt' });
            } else if (user.password != req.body.password) {
                res.json({ success: false, message: 'Väärä salasana' });
            } else {
                const token = jwt.sign(user.toObject(), process.env.SECRET, {
                    expiresIn: 60 * 60, // expires in 24 hours
                });

                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }
        })

}

module.exports.newUser = newUser;
module.exports.authenticate = authenticate;
module.exports.getUsers = getUsers;