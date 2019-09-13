const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendContributionSchema = new Schema({
  CommitteeID: String,
  SubCategoryID: String,
  ContributionID: [String]
});

module.exports = mongoose.model('friendContribution', friendContributionSchema);
