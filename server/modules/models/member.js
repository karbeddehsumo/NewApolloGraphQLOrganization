const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  FamilyID: String,
  OrganizationID: String,
  FirstName: String,
  MiddleName: String,
  LastName: String,
  Suffix: String,
  DOB: String,
  Gender: String,
  MembershipDate: String,
  Title: String,
  ContactTypeID: String,
  PhoneNumber: String,
  PhoneProviderID: String,
  Email: String,
  PictureID: String,
  Status: String,
  EnteredBy: String,
  DateEntered: String

});

module.exports = mongoose.model('member', memberSchema);
