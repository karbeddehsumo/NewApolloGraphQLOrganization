
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  OrganizationID: String,
  email: String,
  password: String,
  role: String
});

mongoose.model('user', UserSchema);
