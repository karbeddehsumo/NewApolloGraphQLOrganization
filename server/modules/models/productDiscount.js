const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productDiscountSchema = new Schema({
  ProductID: String,
  Discount: String,
  StartDate: String,
  EndDate: String,
  EnteredBy: Integer,
  DateEntered: String
});

module.exports = mongoose.model('productDiscount', productDiscountSchema);
