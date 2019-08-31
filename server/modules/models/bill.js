const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billSchema = new Schema({
  OrganizationID: SComment: String,
  PayeeID: String,
  PayeeName: String,
  AccountNumber: String,
  TotalAmount: String,
  AmountDue: String,
  DateDue: String,
  Comment: String,
  Status: String,
  EnteredBy: String,
  DateEntered: String
});

module.exports = mongoose.model('bill', billSchema);
