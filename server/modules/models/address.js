const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  Address1: String,
  Address1: String,
  City: String,
  State: String,
  Zip: String
});

module.exports = mongoose.model('address', addressSchema);
