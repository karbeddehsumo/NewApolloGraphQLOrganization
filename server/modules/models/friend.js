const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
  OrganizationID: String,
  Title: String,
  FirstName: String,
  LastName: String,
  Suffix: String,
  SubCategoryID: String,
  EventAttendanceID: [String],
  EventDate: Date,
  ContactID: String,
  AddressID: String
  Comment: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('friend', friendSchema);
