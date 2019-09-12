const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const miscQuestion = new Schema({
  OrganizationID: String,
  Question: String,
  Category: String,
  Required: String,
  Sequence: String
});

module.exports = mongoose.model('miscQuestion', miscQuestionSchema);
