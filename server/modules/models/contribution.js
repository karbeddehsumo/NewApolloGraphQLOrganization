const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contributionSchema = new Schema({
  ContributionTypeID: String,
  PayeeID: String,
  Amount: String,
  ContributionDate: String,
  CheckNumber: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('contribution', contributionSchema);
