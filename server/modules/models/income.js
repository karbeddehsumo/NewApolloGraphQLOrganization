const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  CommitteeID: String,
  BankAccountID: String,
  IncomeDate: String,
  CashAmount: String,
  CategoryID: String,
  CheckAmount: String,
  CoinAmount: String,
  Comment: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('income', incomeSchema);
