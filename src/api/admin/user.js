const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserMongo = require('../../schema/user-model');
const sha1 = require('sha1');

const userService = require('../../services/userService');

const jwtOptions = {
  expiresIn: '2h',
};

module.exports = {
  newUser: async (req, res) => {
    const {
      fname, sname, email, password,
    } = req.body;
    try {
      if (await userService.findUserByEmail(email)) {
        throw new Error('Käyttäjä on jo rekisteröitynyt');
      }
      const pwHash = await generateHash(password);
      const user = await userService.createUser(fname, sname, email, pwHash);
      res.json({ success: true, data: user });
    } catch (e) {
      console.log(e.message);
      res.json({ success: false, message: e.message });
    }
  },

  authenticate: async (req, res) => {
    const { email, password } = req.body;
    try {
      let user = await userService.findUserByEmail(email);
      if (!user) {
      // While mongoDb users still exists, they are moved to postgres when they sign in
        const mongoUser = await userService.findMongoUserByEmail(email);
        if (!mongoUser) {
          throw new Error('Käyttäjää ei löydy');
        } else {
          console.log('mongouser found');
          if (mongoUser.password !== sha1(password)) {
            throw new Error('Virheellinen salasana');
          }
          const { fname, sname } = mongoUser;
          const pwHash = await generateHash(password);
          user = await userService.createUser(fname, sname, email, pwHash);
        }
      }
      const passwordIsCorrect = await isPasswordCorrect(password, user.password);
      if (!passwordIsCorrect) {
        throw new Error('Virheellinen salasana');
      }
      if (!user.Roles.length) {
        throw new Error('Käyttäjää ei ole vielä hyväksytty');
      }
      console.log(user);
      const payload = {
        id: user.id,
        fname: user.ContactInfo.fname,
        lname: user.ContactInfo.lname,
        email: user.ContactInfo.email,
      };
      const token = jwt.sign(payload, process.env.SECRET, jwtOptions);
      res.json({
        success: true,
        token,
        user,
      });
    } catch (e) {
      console.log(e.message);
      res.json({ success: false, message: e.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await userService.getUserById(req.params.userId);
      res.json({ success: true, data: user });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await userService.findUsers();
      res.json({ success: true, data: users });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  updateUser: (req, res) => {
    const user = req.body;
    UserMongo.findByIdAndUpdate(user._id, user)
      .then((_data) => {
        res.json({ success: true, data: _data });
      })
      .catch((err) => {
        res.json({ success: true, data: err });
      });
  },

  deleteUser: (req, res) => {
    UserMongo.findByIdAndRemove(req.params._id)
      .then((_data) => {
        res.json({ success: true, data: _data });
      })
      .catch((err) => {
        res.json({ success: false, data: err });
      });
  },

  addRoleToUser: async (req, res) => {
    try {
      const user = await userService.findUserById(req.params.userId);
      const role = await userService.findRoleById(req.params.roleId);
      await user.addRole(role);
      res.json({ success: true, data: await userService.findUserById(req.params.userId) });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  removeRoleFromUser: async (req, res) => {
    try {
      const user = await userService.findUserById(req.params.userId);
      const role = await userService.findRoleById(req.params.roleId);
      await user.removeRole(role);
      res.json({ success: true, data: await userService.findUserById(req.params.userId) });
    } catch (e) {
      res.json({ success: false, message: e.message });
    }
  },

  getRoles: async (req, res) => {
    try {
      const roles = await userService.getRoles();
      res.json({ success: true, data: roles });
    } catch (e) {
      console.log(e);
      res.json({ success: false, message: e.message });
    }
  },

  isValidToken: (req, res) => {
    const token = req.body.token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          return res.json({ success: false, message: 'Virheellinen token' });
        }
        req.decoded = decoded;
        res.json({ success: true, message: 'Validi token' });
      });
    } else {
      res.status(403).send({
        success: false,
        message: 'Tokenia ei saatu',
      });
    }
  },

  checkToken: (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          return res.json({ success: false, message: 'Virheellinen token' });
        }
        req.decoded = decoded;
        next();
      });
    } else {
      res.status(403).send({
        success: false,
        message: 'missing jwt',
      });
    }
  },

  isHallitus: async (req, res, next) => {
    const user = await userService.findUserById(req.decoded.id);
    const isHallitus = user.Roles.filter(role => role.value === 4).length > 0;
    if (!isHallitus) {
      res.json({ success: false, message: 'Hallitusoikeudet vaadittu' });
    } else next();
  },

  isWebmaster: async (req, res, next) => {
    const user = await userService.findUserById(req.decoded.id);
    const isWebmaster = user.Roles.filter(role => role.value === 5).length > 0;
    if (!isWebmaster) {
      res.json({ success: false, message: 'Webmaster-oikeudet vaadittu' });
    } else next();
  },
};


const generateHash = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
};

async function isPasswordCorrect(password, hash) {
  try {
    const res = await bcrypt.compare(password, hash);
    return res;
  } catch (e) {
    console.log(e);
    return false;
  }
}
