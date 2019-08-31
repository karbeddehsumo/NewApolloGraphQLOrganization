const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  Title: String,
  URL: String,
  ArticleText: String,
  CreateDate: String,
  UpdateDate: String
});

module.exports = mongoose.model('article', articleSchema);
