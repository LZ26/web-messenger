const Sequelize = require('sequelize');
const db = require('../db');
const { ARRAY, BOOLEAN, DATE, INTEGER, STRING } = Sequelize;

const Room = db.define('room', {
  name: {
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

  capacity: {
    type: INTEGER,
    defaultValue: 1,
    validate: {
      isNumeric: true,
    },
  },

  rating: {
    type: ARRAY(STRING),
  },

  date: {
    type: DATE,
    allowNull: false,
  },

  isLocked: {
    type: BOOLEAN,
    defaultValue: false,
  },

  password: {
    type: STRING,
    defaultValue: '',
  },
});

module.exports = Room;
