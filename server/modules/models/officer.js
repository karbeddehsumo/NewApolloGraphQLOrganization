const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const officer = new Schema({
  CommitteeID: String,
  Title: String,
  MemberID: String,
  DateCreated: String,
  Description: String,
  Term: Integer,
  MiscQuestionID: [String],
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('officer', officerSchema);
