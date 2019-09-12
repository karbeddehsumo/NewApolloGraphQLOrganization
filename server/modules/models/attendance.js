const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  MeetingID: String,
  MemberID: String,
  RollCall: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('attendance', attendanceSchema);
