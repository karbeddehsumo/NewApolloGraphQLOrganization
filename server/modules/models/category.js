const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  OrganizationID: String,
  CategoryName: String,
  Status: String
});

module.exports = mongoose.model('category', categorySchema);
