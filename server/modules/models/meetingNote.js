const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingNoteSchema = new Schema({
  CommitteeID: String,
  MeetingAgendaID: String,
  Note: String,
  NoteDate: String,
  Status: String,
  EnteredBy: Integer,
  DateEntered: Date
});

module.exports = mongoose.model('meetingNote', meetingNoteSchema);
