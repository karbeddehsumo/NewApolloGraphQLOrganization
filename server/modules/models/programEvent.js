const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programEventSchema = new Schema({
  CommitteeID: String,
  GoalID: String,
  Title: String,
  _When: String,
  _Who: String,
  _Where: Integer,
  _What: String,
  _How: Date,
  BeginTime: String,
  EndTime: String,
  Status: String,
  CalendarID: String,
  DocumentID: String,
  PictureID: [String],
  AnnouncementID: String,
  StoryID: String,
  EventEndDate: String,
  ProgramAttendance: [String],
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('programEvent', programEventSchema);
