const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  FamilyID: String,
  OrganizationID: String,
  FirstName: String,
  MiddleName: String,
  LastName: String,
  Suffix: String,
  DOB: Date,
  Gender: String,
  MembershipDate: Date,
  Title: String,
  ContactTypeID: String,
  PhoneNumber: String,
  PhoneProviderID: String,
  Email: String,
  PictureID: String,
  MeetingAttendanceID: [String],
  ProgramAttendanceID: [String],
  Status: String,
  EnteredBy: String,
  DateEntered: Date

});

module.exports = mongoose.model('member', memberSchema);
