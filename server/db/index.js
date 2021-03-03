const Sequelize = require('sequelize');
const db = require('./db');
const Chat = require('./models/Chat');
const Room = require('./models/Room');
const User = require('./models/User');

//associations
Chat.belongsTo(User);
User.hasMany(Chat);

Room.belongsToMany(User, { through: 'room_creators', as: 'children' });
User.belongsToMany(Room, { through: 'room_creators', as: 'parents' });

Room.hasOne(Chat);
Chat.belongsTo(Room);

module.exports = {
  db,
  Chat,
  Room,
  User,
};
