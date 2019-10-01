const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const officerSchema = new Schema({
  CommitteeID: String,
  Title: String,
  MemberID: String,
  DateCreated: String,
  Description: String,
  Term: String,
  QuestionID: [String],
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('officer', officerSchema);
