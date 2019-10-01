const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  OrganizationID: String,
  MemberID: String,
  Address1: String,
  Address2: String,
  Address3: String,
  City: String,
  State: String,
  Zip: String,
  Country: String,
});

module.exports = mongoose.model('address', addressSchema);
