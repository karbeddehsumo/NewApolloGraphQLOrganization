const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  CommitteeID: String,
  Title: String,
  BankAccountID: String,
  IncomeDate: String,
  CashAmount: String,
  SubCategoryID: Integer,
  CheckAmount: String,
  CoinAmount: Date,
  Comment: String,
  EnteredBy: String,
  DateEntered: String
});

module.exports = mongoose.model('income', incomeSchema);
