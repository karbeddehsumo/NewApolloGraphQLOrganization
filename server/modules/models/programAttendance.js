const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programAttendanceSchema = new Schema({
  MeetingID: String,
  AttendanceID: String,
});

module.exports = mongoose.model('programAttendance', programAttendanceSchema);
