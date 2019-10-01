const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
  CommitteeID: String,
  Title: String,
  SubTitle: String,
  PrimaryName: String,
  URL: String,
  ArticleText: String,
  Publish:String,
  DocumentID: [String],
  CreateDate: Date,
  UpdateDate: Date,
  CreatedBy: String
});

module.exports = mongoose.model('story', storySchema);
