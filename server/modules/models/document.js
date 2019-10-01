const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  committeeID: String,
  Title: String,
  DocumentTypeID: String,
  ContentType: String,
  ContentLength: String,
  SortOrder: String,
  DateCreated: Date,
  Author: String,
  Version: String,
  FileName: String,
  TempFileName: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('document', documentSchema);
