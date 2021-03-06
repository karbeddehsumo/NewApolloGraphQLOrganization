const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankAccountSchema = new Schema({
  CommitteeID: String,
  BankName: String,
  AccountNumber: String,
  Description: String,
  ControlName: String,
  Status: String,
  IsBudgeted: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('bankaccount', bankAccountSchema);
