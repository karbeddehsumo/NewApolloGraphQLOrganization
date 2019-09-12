const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendEventAttenceSchema = new Schema({
  ProgramEventID: String,
  FriendID: String,
});

module.exports = mongoose.model('friendEventAttence', friendEventAttenceSchema);
