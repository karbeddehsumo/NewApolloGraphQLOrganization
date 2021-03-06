const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  Name: String,
  Address: String,
  Address2: String,
  City: String,
  State: String,
  Zip: String,
  Country: String,
  PhoneNumber: String,
  Email: String,
  YearFounded: String,
  FriendID: [String],
  ChildrenOrganizationID: [String],
  CommitteeID: [String],
  PrimaryCommitteeID: String,
  StoryID: [String],
  PictureID: [String],
  VideoID: [String],
  Description: String,
  Vision: String,
  Mission: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date,

});

module.exports = mongoose.model('organization', organizationSchema);
