const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  CommitteeID: String,
  PictureDate: String,
  Description: String,
  ImageData: String,
  ImageMimeType: String,
  PictureType: String,
  GroupID: String,
  IsPublic: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('picture', pictureSchema);
