const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  OrganizationID: String,
  FirstName: String,
  MiddleName: String,
  LastName: String,
  Suffix: String,
  DOB: Date,
  Gender: String,
  MembershipDate: Date,
  Title: String,
  ContactID: String,
  AddressID: String,
  PhoneNumber: String,
  PhoneProviderID: String,
  Email: String,
  PictureID: [String],
  AnnouncementID: String,
  QuestionID: [String],
  StoryID: [String],
  Status: String,
  EnteredBy: String,
  DateEntered: Date

});

module.exports = mongoose.model('member', memberSchema);
