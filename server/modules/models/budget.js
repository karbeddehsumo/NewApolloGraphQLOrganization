const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  CommitteeID: String,
  BudgetYear: String,
  Type: String,
  SubCategoryID: String,
  Amount: String,
  Comment: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('budget', budgetSchema);
