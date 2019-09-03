const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
  OrganizationID: String,
  Title: String,
  FirstName: String,
  LastName: String,
  Suffix: String,
  SubCategoryID: String,
  LastEventAttended: String,
  EventDate: Date,
  PhoneNumber: String,
  PhoneProviderID: String,
  Email: String,
  BestContact: String,
  Address: String,
  Address2: String,
  City: String,
  State: String,
  Zip: String,
  Comment: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('friend', friendSchema);
