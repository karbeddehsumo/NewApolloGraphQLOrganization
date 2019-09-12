const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billSchema = new Schema({
  CommitteeID: String,
  PayeeID: String,
  PayeeName: String,
  AccountNumber: String,
  TotalAmount: String,
  AmountDue: String,
  DateDue: Date,
  Comment: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('bill', billSchema);
