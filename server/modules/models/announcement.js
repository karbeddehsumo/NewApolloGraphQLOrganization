const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
  OrganizationID: String,
  CommitteeID: String,
  Title: String,
  BeginDate: String,
  EndDate: String,
  Message: String,
  DocumentID: String,
  Status: String,
  EnteredBy: String,
  DateEntered: String
});

module.exports = mongoose.model('announcement', announcementSchema);
