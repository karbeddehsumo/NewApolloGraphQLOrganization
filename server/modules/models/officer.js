const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const officer = new Schema({
  CommitteeID: String,
  Title: String,
  MemberID: String,
  DateCreated: String,
  Description: String,
  Term: Integer,
  Status: String,
  EnteredBy: Date,
  DateEntered: String
});

module.exports = mongoose.model('officer', officerSchema);
