const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const payeeSchema = new Schema({
  CommitteeID: String,
  BankAccountID: String,
  AccountNumber: String,
  PayeeName: String,
  URL: String,
  CategoryID: String,
  Frequency: String,
  Description: Date,
  PhoneNumber: String,
  PayeeTypeID: String,
  Email: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('payeee', payeeSchema);
