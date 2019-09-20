const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  CommitteeID: String,
  Cell: String,
  Email: String,
  BestContact: String,
});

module.exports = mongoose.model('contact', contactSchema);
