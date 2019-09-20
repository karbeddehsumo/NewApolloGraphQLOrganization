const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const committeeSchema = new Schema({
  OrganizationID: String,
  CommitteeName: String,
  Description: String,
  PrimaryContactID: String,
  PrimaryAddressID: String,
  PageStyleID: String,
  Status: String,
  IsPublic: String,
  CommitteeType: String,
  MissionStatementStoryID: String,
  Title1StoryID: String,
  Title2StoryID: String,
  Title3StoryID: String,
  DisplayBanner: String,
  VisionStoryID: String,
  BankAccountID: [String],
  BillID: [String],
  BudgetID: [String],
  CalanderID: [String],
  ExpenseID: [String],
  GoalID: [String],
  IncomeID: [String],
  MeetingID: [String],
  MemberID: [String],
  PayeeID: [String],
  PictureID: [String],
  AnnouncementID: [String],
  DocumentID: [String],
  MiscQuestionID: [String],
  ListTableID: [String],
  StoryID: [String],
  ProductID: [String],
  VideoID: [String],
  EnteredBy: String,
  DateEntered: Date

});

module.exports = mongoose.model('committee', committeeSchema);
