const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  CommitteeID: String,
  Title: String,
  EventType: String,
  StartDate: Date,
  EndDate: Date,
  StartTime: String,
  EndTime: String,
  Location: String,
  Description: String,
  Host: String,
  PublicAccess: String,
  DocumentID: [String],
  PictureID: [String],
  StoryID: [String],
  DisplayBanner: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('calendar', calendarSchema);
