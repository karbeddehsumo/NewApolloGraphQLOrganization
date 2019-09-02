const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familySchema = new Schema({
  FamilyName: String,
  Address: String,
  Address2: String,
  City: String,
  State: String,
  Zip: String,
  Status: String,
  EnteredBy: String,
  DateEntered: String

});

module.exports = mongoose.model('families', familySchema);
