const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familySchema = new Schema({
  FamilyName: String,
  AddressID: String,
  Status: String,
  EnteredBy: String,
  DateEntered: String

});

module.exports = mongoose.model('families', familySchema);
