// #1 Import the constructor Schema and the model() method
// Note the use of ES6 desctructuring
const { Schema, model }  = require('mongoose');

// #2 Create a post schema using mongoose Schema
const postSchema = new Schema({
  title: String,
  content: String
});

// #3 Create a post model with mongoose model() method
const Post = model('post', postSchema);

module.exports = Post;
