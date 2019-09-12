const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  committeeID: String,
  SubCategoryID: String,
  BankAccountID: String,
  Payee: String,
  ExpenseDate: String,
  Amount: Integer,
  CheckNumber: String,
  Reconcile: Date,
  Comment: String,
  Status: String,
  EnteredBy: String,
  DateEntered: String
});

module.exports = mongoose.model('expense', expenseSchema);
