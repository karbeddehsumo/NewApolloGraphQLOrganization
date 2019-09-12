const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskactionItemSchema = new Schema({
  GoalID: String,
  Description: String,
  AssignedTo: String,
  StartDate: String,
  EndDate: String,
  ActionItem: [actionItem]
  Comment: [String]
});

module.exports = mongoose.model('task', taskSchema);
