const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
  OrganizationID: String,
  Title: String,
  FirstName: String,
  LastName: String,
  Suffix: String,
  SubCategoryID: String,
  ProgramAttendance: [String],
  EventDate: Date,
  ContactID: String,
  AddressID: String,
  StoryID: String,
  Comment: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('friend', friendSchema);
