const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  OrganizationID: String,
  Name: String,
  Description: String,
  Price: String,
  Quantity: String,
  CategoryID: Integer,
  CategoryID: String,
  PictureID: Date,
  DocumentID: String,
  EnteredBy: String,
  DateEntered: String
});

module.exports = mongoose.model('product', productSchema);
