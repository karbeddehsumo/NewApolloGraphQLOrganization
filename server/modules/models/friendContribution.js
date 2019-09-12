const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendContributionSchema = new Schema({
  OrganizationID: String,
  SubCategoryID: String,
  FriendID: String,
  ContributionDate: String,
  CheckNumber: String,
  Amount: Integer,
  Comment: String,
  Status: Date,
  EnteredBy: String,
  DateEntered: String
});

module.exports = mongoose.model('friendContribution', friendContributionSchema);
