const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productDiscountSchema = new Schema({
  CommitteeID: String,
  ProductID: String,
  Discount: String,
  StartDate: String,
  EndDate: String,
  EnteredBy: Integer,
  DateEntered: Date
});

module.exports = mongoose.model('productDiscount', productDiscountSchema);
