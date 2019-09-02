const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankBalanceSchema = new Schema({
  OrganizationID: String,
  BankAccountID: String,
  LastIncomeID: String,
  LastExpenseID: String,
  BeginDate: Date,
  EndDate: Date,
  BeginBalance: Double,
  RevenueAmount: Double,
  ExpenseAmount: Double,
  EndingBalance: Double
});

module.exports = mongoose.model('bankBalance',bankBalanceSchema);
