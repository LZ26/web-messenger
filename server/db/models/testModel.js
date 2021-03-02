const Sequelize = require('sequelize');
const db = require('../db');
const { STRING } = Sequelize;

const LoremIpsum = db.define('loremipsum', {
  text: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = LoremIpsum;
