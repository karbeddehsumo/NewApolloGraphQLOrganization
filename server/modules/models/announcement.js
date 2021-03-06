const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
  CommitteeID: String,
  Title: String,
  BeginDate: Date,
  EndDate: Date,
  Message: String,
  IsPublic: String,
  DocumentID: [String],
  PictureID: [String],
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('announcement', announcementSchema);
