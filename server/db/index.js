const Sequelize = require('sequelize');
const db = require('./db');
const LoremIpsum = require('./models/testModel');

module.exports = {
  db,
  LoremIpsum,
};
