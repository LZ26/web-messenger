const Sequelize = require('sequelize');
const db = require('../db');
const { STRING, INTEGER, ARRAY, BOOLEAN } = Sequelize;

const User = db.define('user', {
  nickname: {
    type: STRING,
    allowNull: false,
  },
  avatar: {
    type: STRING,
    allowNull: false,
  },

  bio: {
    type: STRING,
    defaultValue: '',
  },

  title: {
    type: STRING,
    allowNull: false,
  },

  email: {
    type: STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: {
        args: [11],
        msg: 'Minimum 11 digits required in the phone number',
      },
      max: {
        args: [20],
        msg: 'Maximum 20 digits allowed in the phone number',
      },
    },
  },
  rating: {
    type: ARRAY(STRING),
    defaultValue: [],
  },

  isActive: {
    type: BOOLEAN,
    defaultValue: false,
  },

  hasAccount: {
    type: BOOLEAN,
    allowNull: false,
  },

  isAdmin: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
