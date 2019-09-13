const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingAttendanceSchema = new Schema({
  MeetingID: String,
  AttendanceID: String,
});

module.exports = mongoose.model('meetingAttendance', meetingAttendanceSchema);
