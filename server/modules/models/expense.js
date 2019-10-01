const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  committeeID: String,
  CategoryID: String,
  BankAccountID: String,
  Payee: String,
  ExpenseDate: String,
  Amount: String,
  CheckNumber: String,
  Reconcile: Date,
  Comment: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('expense', expenseSchema);
