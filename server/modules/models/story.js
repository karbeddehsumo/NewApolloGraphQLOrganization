const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
  CommitteeID: String,
  Title: String,
  URL: String,
  ArticleText: String,
  Publish:String
  CreateDate: String,
  UpdateDate: String
});

module.exports = mongoose.model('story', storySchema);
