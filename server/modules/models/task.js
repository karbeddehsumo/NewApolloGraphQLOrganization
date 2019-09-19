const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskactionItemSchema = new Schema({
  CommitteeID: String,
  GoalID: String,
  Description: String,
  AssignedTo: String,
  StartDate: String,
  EndDate: String,
  ActionItemID: [String],
  Comment: [String]
});

module.exports = mongoose.model('task', taskSchema);
