const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  ProgramTypeID: String,
  AttendeeID: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('attendance', attendanceSchema);
