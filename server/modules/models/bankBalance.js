const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankBalanceSchema = new Schema({
  OrganizationID: String,
  BankAccountID: String,
  LastIncomeID: String,
  LastExpenseID: String,
  BeginDate: Date,
  EndDate: Date,
  BeginBalance: String,
  RevenueAmount: String,
  ExpenseAmount: String,
  EndingBalance: String
});

module.exports = mongoose.model('bankBalance',bankBalanceSchema);
