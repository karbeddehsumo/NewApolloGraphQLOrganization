const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  OrganizationID: String,
  MemberID: String,
  RollCall: String,
  CalendarID: String,
  EnteredBy: String,
  DateEntered: Date
});

module.exports = mongoose.model('attendance', attendanceSchema);
