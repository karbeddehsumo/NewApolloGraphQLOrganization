const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listTableSchema = new Schema({
  CommitteeID: String,
  ListTableID: String,
  Value1: String,
  Value2: String,
  Value3: String,
  Value4: String,
  Value5: String,
  Value6: Date,
  Value7: String,
  Value8: String,
  Value9: String,
  Value10: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('listTable', listTableSchema);
