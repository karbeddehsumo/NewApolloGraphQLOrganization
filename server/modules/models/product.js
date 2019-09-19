const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  CommitteeID: String,
  Name: String,
  Description: String,
  Price: String,
  Quantity: String,
  CategoryID: Integer,
  CategoryID: String,
  PictureID: [String],
  DocumentID: [String],
  StoryID: [String],
  AnnouncementID: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('product', productSchema);
