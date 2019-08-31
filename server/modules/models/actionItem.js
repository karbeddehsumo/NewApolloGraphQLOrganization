const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionItemSchema = new Schema({
  OrganizationID: String,
  ParentType: String,
  ParentItemID: String,
  ChildItemID: String,
});

module.exports = mongoose.model('actionItem', actionItemSchema);
