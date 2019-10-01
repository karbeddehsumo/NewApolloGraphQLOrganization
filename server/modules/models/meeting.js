const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  CommitteeID: String,
  MeetingDate: String,
  Venue: String,
  StartTime: String,
  EndTime: String,
  Title: String,
  NextMeetingDate: Date,
  Status: String,
  CalendarID: String,
  DocumentID: [String],
  Host: String,
  AttendanceID: [String],
  MeetingNoteID: [String],
  AnnouncementID: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('meeting', meetingSchema);
