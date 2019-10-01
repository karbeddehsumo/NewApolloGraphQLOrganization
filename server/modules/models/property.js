const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  OrganizationID: String,
  PurchaseDate: String,
  Value: String,
  Quantity: String,
  Location: String,
  AssignedTo: String,
  Condition: String,
  TagNumber: Date,
  Title: String,
  Description: String,
  Comment: String,
  PictureID: [String],
  DocumentID: [String],
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('property', propertySchema);
