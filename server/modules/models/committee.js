const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const committeeSchema = new Schema({
  OrganizationID: String,
  CommitteeName: String,
  Description: String,
  Contact: String,
  ContactEmail: String,
  PhoneNumber: String,
  BriefDescription: String,
  PageStyleID: String,
  Status: String,
  CodeDesc: String,
  StoryCreateAccess: String,
  PictureCreateAccess: String,
  VideoCreateAccess: String,
  IsPublic: String,
  DefaultMemberType: String,
  IsGroupCommittee: String,
  PictureID: String,
  MissionStatement: String,
  Title1: String,
  Information1: String,
  Title2: String,
  Information2: String,
  Title3: String,
  Information3: String,
  DisplayBanner: String,
  Vision: String,
  EnteredBy: String,
  DateEntered: String

});

module.exports = mongoose.model('committee', committeeSchema);
