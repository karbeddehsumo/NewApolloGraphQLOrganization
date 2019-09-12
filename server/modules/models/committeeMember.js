const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const committeeMemberSchema = new Schema({
  CommitteeID: String,
  MemberID: String,
});

module.exports = mongoose.model('committeeMember', committeeMemberSchema);
