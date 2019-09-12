const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listItemSchema = new Schema({
  CommitteeID: String,
  ListTableID: String,
  Value1: String,
  Value2: String,
  Value3: String,
  Value4: Integer,
  Value5: String,
  Value6: Date,
  Value7: String,
  Value8: String,
  Value9: String,
  Value10: String,
  EneredBy: String,
  DateEntered: String
});

module.exports = mongoose.model('listItem', listItemSchema);
