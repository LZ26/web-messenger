const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/web-messenger', {
  logging: false,
});

module.exports = db;
