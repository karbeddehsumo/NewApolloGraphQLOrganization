// #1 Import the Post model created with mongoose

const ActionItem = require('./models/actionItem');
const Address = require('./models/address');
const Announcement = require('./models/announcement');
const Attendance = require('./models/attendance');
const BankAccount = require('./models/bankAccount');
const BankBalance = require('./models/bankBalance');
const Bill = require('./models/bill');
const Budget = require('./models/budget');
const Calendar = require('./models/calendar');
const Category = require('./models/category');
const Committee = require('./models/committee');
const Constant = require('./models/constant');
const Contact = require('./models/contact');
const Contribution = require('./models/contribution');
const Document = require('./models/document');
const Expense = require('./models/expense');
const Friend = require('./models/friend');
const Goal = require('./models/goal');
const Income = require('./models/income');
const ListHeader = require('./models/listHeader');
const ListItem = require('./models/listItem');
const ListTable = require('./models/listTable');
const MeetingAgenda = require('./models/meetingAgenda');
const MeetingNote = require('./models/meetingNote');
const Meeting = require('./models/meeting');
const Member = require('./models/member');
const Question = require('./models/question');
const Officer = require('./models/officer');
const Organization = require('./models/organization');
const Payee = require('./models/payee');
const Picture = require('./models/picture');
const Post = require('./models/post');
const Product = require('./models/product');
const ProductDiscount = require('./models/productDiscount');
const ProgramEvent = require('./models/programEvent');
const Property = require('./models/property');
const Role = require('./models/role');
const Story = require('./models/story');
const Task = require('./models/task');
const User = require('./models/user');
const Video = require('./models/video');



// #2 Create resolver functions to handle GraphQL queries
/**
 * Query resolver "posts" must return values in response to
 * the query "posts" in GraphQL schema.
 */
const resolvers = {
  Query: {
    // Query which returns posts list
    actionItems: () => ActionItem.find({}),
    announcements: () => Announcement.find({}),
    attendances: () => Attendance.find({}),
    bankAccounts: () => BankAccount.find({}),
    bankBalances: () => BankBalance.find({}),
    bills: () => Bills.find({}),
    budgets: () => Budget.find({}),
    committees: () => Committee.find({}),
    constants: () => Constant.find({}),
    friends: () => Friend.find({}),
    members: () => Member.find({}),
    questions: () => Question.find({}),
    organizations: () => Organization.find({}),
    posts: () => Post.find({}),
    users: () => User.find({}),

  },

/**
 * Mutation resolver addPost creates a new document in MongoDB
 * in response to the "addPost" mutation in GraphQL schema.
 * The mutation resolvers must return the created object.
 */
  Mutation: {
    addActionItem: (parent, actionItem) => {
      const newActionItem = new ActionItem({
        OrganizationID: actionItem.OrganizationID,
        ParentType: actionItem.ParentType,
        ParentItemID: actionItem.ParentItemID,
        ChildItemID: actionItem.ChildItemID,
      });
      return newActionItem.save();
    },
    addAnnouncement: (parent, announcement) => {
      const newAnnouncement = new Announcement({
        OrganizationID: announcement.OrganizationID,
        CommitteeID: announcement.CommitteeID,
        Title: announcement.Title,
        BeginDate: announcement.BeginDate,
        EndDate: announcement.EndDate,
        Message: announcement.Message,
        DocumentID: announcement.DocumentID,
        Status: announcement.Status,
        EnteredBy: announcement.EnteredBy,
        DateEntered: announcement.DateEntered
      });
      return newAnnouncement.save();
    },

    addAttendance: (parent, attendance) => {
      const newAttendance = new Attendance({
        OrganizationID: attendance.OrganizationID,
        MemberID: attendance.MemberID,
        RollCall: attendance.RollCall,
        CalendarID: attendance.CalendarID,
        EnteredBy: attendance.EnteredBy,
        DateEntered: attendance.DateEntered
      });
      return newAttendance.save();
    },
    addBankAccount: (parent, bankAccount) => {
      const newBankAccount = new BankAccount({
        OrganizationID: bankAccount.OrganizationID,
        BankName: bankAccount.BankName,
        AccountNumber: bankAccount.AccountNumber,
        Description: bankAccount.Description,
        ControlName: bankAccount.ControlName,
        Status: bankAccount.Status,
        IsBudgeted: bankAccount.IsBudgeted,
        EnteredBy: bankAccount.EnteredBy,
        DateEntered: bankAccount.DateEntered
      });
    },
    addBankBalance: (parent, bankBalance) => {
      const newBankBalance = new BankBalance({
        OrganizationID: bankBalance.OrganizationID,
        BankAccountID: bankBalance.BankAccountID,
        LastIncomeID: bankBalance.LastIncomeID,
        LastExpenseID: bankBalance.LastExpenseID,
        BeginDate: bankBalance.BeginDate,
        EndDate: bankBalance.EndDate,
        BeginBalance: bankBalance.BeginBalance,
        RevenueAmount: bankBalance.RevenueAmount,
        ExpenseAmount: bankBalance.ExpenseAmount,
        EndingBalance: bankBalance.EndingBalance
      });
      return newBankBalance.save();
    },

    addOrganization: (parent, organization) => {
      const newOrganization = new Organization({
        Name: organization.Name,
        Address: organization.Address,
        Address2: organization.Address2,
        City: organization.City,
        State: organization.State,
        Zip: organization.Zip,
        Country: organization.Country,
        PhoneNumber: organization.PhoneNumber,
        Email: organization.Email,
        YearFounded: organization.YearFounded,
        StoryID: organization.StoryID,
        PictureID: organization.PictureID,
        VideoID: organization.VideoID,
        Description: organization.Description,
        Vision: organization.Vision,
        Mission: organization.Mission,
        Status: organization.Status,
        EnteredBy: organization.EnteredBy,
        DateEntered: organization.DateEntered,
        ParentID: organization.ParentID
      });
      return newOrganization.save();
    },
    addPost: (parent, post) => {
      // Create a new post
      const newPost = new Post({ title: post.title, content: post.content });
      // Save new post and return it
      return newPost.save();
    },
    addUser: (parent, user) => {
      const newUser = new User({
        email: user.email,
        password: user.password
      });
      return newUser.save();
    },

  }
};

module.exports = resolvers;
