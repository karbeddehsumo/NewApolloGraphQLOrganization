const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  CommitteeID: String,
  Title: String,
  EventType: String,
  StartDate: String,
  EndDate: Integer,
  StartTime: String,
  EndTime: Date,
  Location: String,
  Description: String,
  Host: String,
  PublicAccess: String,
  DocumentID: [String],
  PictureID: [String],
  StoryID: [String],
  DisplayBanner: String,
  Status: Strng,
  EnteredBy: String,
  DateEntered: Date,
});

module.exports = mongoose.model('calendar', calendarSchema);
