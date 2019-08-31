const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankBalanceSchema = new Schema({
  OrganizationID: String,
  BankAccountID: String,
  LastIncomeID: String,
  LastExpenseID: String,
  BeginDate: String,
  EndDate: String,
  BeginBalance: String,
  RevenueAmount: String,
  ExpenseAmount: String,
  EndingBalance: String
});

module.exports = mongoose.model('bankBalance',bankBalanceSchema);
