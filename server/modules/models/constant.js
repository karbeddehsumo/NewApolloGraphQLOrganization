const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const constantSchema = new Schema({
  OrganizationID: String,
  Category: String,
  ConstantName: String,
  Value1: String,
  Value2: String,
  Value3: String,
  SortOrder: Number,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('constant', constantSchema);
