const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const picture = new Schema({
  CommitteeID: String,
  PictureDate: String,
  Description: String,
  ImageData: String,
  ImageMimeType: Integer,
  PictureType: String,
  GroupID: Date,
  IsPublic: String,
  Status: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('picture', pictureSchema);
