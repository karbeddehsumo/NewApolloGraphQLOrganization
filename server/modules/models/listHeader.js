const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listHeaderSchema = new Schema({
  CommitteeID: String,
  ListTableID: String,
  Type1: String,
  Type2: String,
  Type3: String,
  Type4: String,
  Type5: String,
  Type6: String,
  Type7: String,
  Type8: String,
  Type9: String,
  Type10: String,
  FileName1: String,
  FileName2: String,
  FileName3: String,
  FileName4: String,
  FileName5: String,
  FileName6: String,
  FileName7: Date,
  FileName8: String,
  FileName9: String,
  FileName10: String,
  EnteredBy: String,
  DateEntered: String
});

module.exports = mongoose.model('listHeader', listHeaderSchema);
