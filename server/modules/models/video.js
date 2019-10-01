const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  CommitteeID: String,
  Title: String,
  URL: String,
  CreateDate: Date,
  CreatedBy: String
});

module.exports = mongoose.model('video', videoSchema);
