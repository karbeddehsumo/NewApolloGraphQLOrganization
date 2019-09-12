// #1 Import the constructor Schema and the model() method
// Note the use of ES6 desctructuring
const { Schema, model }  = require('mongoose');

// #2 Create a post schema using mongoose Schema
const roleSchema = new Schema({
  role: String,
});

// #3 Create a post model with mongoose model() method
const Role = model('role', roleSchema);

module.exports = Role;
