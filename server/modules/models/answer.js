const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  OrganizationID: String,
  MemberID: String,
  QuestionID: String,
  Value: String,
});

module.exports = mongoose.model('answer', answerSchema);
