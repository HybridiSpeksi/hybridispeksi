const uuid = require('uuid/v4');
const transaction = require('sequelize').transaction;
const User = require('../../models').User;
const ContactInfo = require('../../models').ContactInfo;
const UserMongo = require('../schema/user-model');
const Role = require('../../models').Role;

module.exports = {

  createUser: async (fname, lname, email, pwHash) => {
    try {
      const t = await transaction;
      const contactInfo = await ContactInfo.create({
        id: uuid(),
        fname,
        lname,
        email,
      }, { transaction: t });
      const user = await User.create({
        id: uuid(),
        password: pwHash,
      }, { transaction: t });
      await user.setContactInfo(contactInfo, { transaction: t });
      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  findUsers: async () => {
    try {
      const users = await User.findAll({
        attributes: ['id', 'createdAt', 'updatedAt'],
        include: [{
          model: ContactInfo,
        },
        {
          model: Role,
        }],
      });
      return users;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  deleteUser: async (id) => {
    try {
      await User.destroy({
        where: { id },
      });
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  changePassword: async (userId, pwHash) => {
    try {
      const user = await User.findOne({ where: { id: userId } });
      user.update({
        password: pwHash,
      });
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  findUserByEmail: async (email) => {
    try {
      const user = await User.findOne({
        include: [{
          model: ContactInfo,
          where: { email },
        },
        {
          model: Role,
        }],
      });
      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  findUserById: async (id) => {
    try {
      const user = await User.findOne({
        where: { id },
        include: [{
          model: ContactInfo,
        },
        {
          model: Role,
        }],
      });
      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  findRoleById: async (id) => {
    try {
      const role = await Role.findOne({
        where: { id },
      });
      return role;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  findMongoUserByEmail: async (email) => {
    try {
      const user = await UserMongo.findOne({ email });
      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  getRoles: async () => {
    try {
      const roles = await Role.findAll();
      return roles;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },

  getRoleByValue: async (value) => {
    try {
      const role = await Role.findOne({ where: { value } });
      return role;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};
