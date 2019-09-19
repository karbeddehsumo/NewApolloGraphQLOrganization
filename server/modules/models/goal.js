const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  CommitteeID: String,
  Title: String,
  Description: String,
  AssignedTo: String,
  BeginDate: Integer,
  EndDate: String,
  CompletionRatio: Date,
  SupervisorComment: String,
  TaskID: [String],
  DocumentID: [String],
  Status: String,
  Comment: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('goal', goalSchema);
