const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  Cell: String,
  Email: String,
  BestContact: String,
});

module.exports = mongoose.model('contact', contactSchema);
