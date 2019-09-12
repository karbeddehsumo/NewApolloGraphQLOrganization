const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contributionSchema = new Schema({
  CommitteeID: String,
  MemberID: String,
  Amount: String,
  ContributionDate: String,
  CheckNumber: String,
  SubCategoryID: Integer,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('contribution', contributionSchema);
