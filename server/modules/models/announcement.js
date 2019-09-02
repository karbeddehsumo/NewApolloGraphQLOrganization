const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
  OrganizationID: String,
  CommitteeID: String,
  Title: String,
  BeginDate: Date,
  EndDate: Date,
  Message: String,
  DocumentID: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('announcement', announcementSchema);
