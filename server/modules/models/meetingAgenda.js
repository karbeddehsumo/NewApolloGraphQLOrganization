const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingAgendaSchema = new Schema({
  CommitteeID: String,
  MeetingID: String,
  Description: String,
  Status: String,
  TaskID: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('meetingAgenda', meetingAgendaSchema);
