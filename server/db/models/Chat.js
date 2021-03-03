const Sequelize = require('sequelize');
const db = require('../db');
const { ARRAY, BLOB, BOOLEAN, DATE, TEXT } = Sequelize;

const Chat = db.define('chat', {
  history: {
    type: ARRAY(TEXT),
    allowNull: false,
  },

  files: {
    type: BLOB,
  },

  date: {
    type: DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },

  isPrivate: {
    type: BOOLEAN,
    allowNull: false,
  },
});

module.exports = Chat;
