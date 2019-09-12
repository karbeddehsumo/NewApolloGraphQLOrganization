const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionItemSchema = new Schema({
  TaskID: String,
  Description: String,
  AssignedTo: String,
  StartDate: String,
  EndDate: String,
  Comment: [String]
});

module.exports = mongoose.model('actionItem', actionItemSchema);
