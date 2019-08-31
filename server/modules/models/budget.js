const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  OrganizationID: String,
  BudgetYear: String,
  Type: String,
  SubCategoryID: String,
  Amount: String,
  Comment: String,
  Status: String,
  EnteredBy: String,
  DateEntered: String
});

module.exports = mongoose.model('budget', budgetSchema);
