const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankAccountSchema = new Schema({
  OrganizationID: String,
  BankName: String,
  AccountNumber: String,
  Description: String,
  ControlName: String,
  Status: String,
  IsBudgeted: String,
  EnteredBy: Status,
  DateEntered: Date
});

module.exports = mongoose.model('bankaccount', bankAccountSchema);
