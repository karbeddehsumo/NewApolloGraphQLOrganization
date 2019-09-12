const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const payee = new Schema({
  CommitteeID: String,
  BankAccountID: String,
  AccountNumber: String,
  PayeeName: String,
  URL: String,
  SubCategoryID: Integer,
  Frequency: String,
  Description: Date,
  PhoneNumber: String,
  PayeeTypeID: String,
  Email: String,
  Status: String,
  EnteredBy: String,
  DateEntered: String
});

module.exports = mongoose.model('payeee', payeeSchema);
