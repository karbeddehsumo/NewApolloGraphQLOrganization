const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  CommitteeID: String,
  MeetingDate: String,
  Venue: String,
  StartTime: String,
  EndTime: Integer,
  Title: String,
  NextMeetingDate: Date,
  Status: String,
  CalendarID: String,
  DocumentID: String,
  Host: String,
  MeetingAttendance: [string],
  EnteredBy: String,
  DateEntered: String
});

module.exports = mongoose.model('meeting', meetingSchema);
