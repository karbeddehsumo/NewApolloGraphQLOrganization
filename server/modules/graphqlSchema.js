// #1 Import the gql method from apollo-server-express
const { gql } = require('apollo-server-express');

// #2 Construct a schema with gql and using the GraphQL schema language
const typeDefs = gql`
  #---Post -------------------#
  #3 Define the type Post with two fields

  type ActionItem {
      _id: ID,
      OrganizationID: Organization,
      Task: Task,
      Description: String,
      AssignedTo: String,
      StartDate: String,
      EndDate: String,
      Comment: [String]
    },

    type Address {
      _id: ID,
      OrganizationID: Organization,
      Address1: String,
      Address2: String,
      City: String,
      State: String,
      Zip: String
    },

    type Announcement {
        _id: ID,
        CommitteeID: Committee,
        Title: String,
        BeginDate: String,
        EndDate: String,
        Message: String,
        IsPublic: Bool,
        DocumentID: [Document],
        PictureID: [Picture],
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },

  type Attendance {
    _id: ID,
    CommitteeID: Committee,
    ProgramTypeID: String,
    AttendeeID: String,
    EnteredBy: String,
    DateEntered: String
  },

  type BankAccount {
      _id: ID,
      CommitteeID: Committee,
      BankName: String,
      AccountNumber: String,
      Description: String,
      ControlName: String,
      Status: String,
      IsBudgeted: String,
      EnteredBy: String,
      DateEntered: String!
    },

    type BankBalance {
        _id: ID,
        CommitteeID: Committee,
        BankAccountID: BankAccount,
        LastIncomeID: Income,
        LastExpenseID: Expense,
        BeginDate: String,
        EndDate: String,
        BeginBalance: String,
        RevenueAmount: String,
        ExpenseAmount: String,
        EndingBalance: String
      },

      type Bill {
        _id: ID,
        CommitteeID: Committee,
        PayeeID: Payee,
        PayeeName: String,
        AccountNumber: String,
        TotalAmount: String,
        AmountDue: String,
        DateDue: String,
        Comment: String,
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },

      type Budget {
        _id: ID,
        CommitteeID: Committee,
        BudgetYear: String,
        Type: String,
        SubCategoryID: SubCategory,
        Amount: String,
        Comment: String,
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },

      type Calendar {
        _id: ID,
        CommitteeID: Committee,
        Title: String,
        EventType: String,
        StartDate: String,
        EndDate: String,
        StartTime: String,
        EndTime: String,
        Location: String,
        Description: String,
        Host: String,
        PublicAccess: String,
        DocumentID: Document,
        PictureID: Picture,
        DisplayBanner: String,
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },

      type Committee {
        _id: ID,
        OrganizationID: Organization,
        CommitteeName: String,
        Description: String,
        PrimaryContactID: String,
        PrimaryAddressID: String,
        PageStyleID: PageStyle,
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
        DateEntered: String
      },

      type Constant {
        _id: ID,
        OrganizationID: Organization,
        Category: String,
        ConstantName: String,
        Value1: String,
        Value2: String,
        Value3: String,
        SortOrder: String,
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },

      type Contact {
        _id: ID,
        CommitteeID: Committee,
        Cell: String,
        Email: String,
        BestContact: String
      },

      type Contribution {
        _id: ID,
        CommitteeID: Committee,
        PayeeID: String,
        Amount: String,
        ContributionDate: String,
        CheckNumber: String,
        CategoryID: Category,
        EnteredBy: String,
        DateEntered: String
      },

      type Document {
        _id: ID,
        committeeID: Committee,
        DocumentTypeID: DocumentType,
        ContentType: String,
        ContentLength: String,
        SortOrder: String,
        DateCreated: String,
        Author: String,
        Version: String,
        FileName: String,
        TempFileName: String,
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },

      type Expense {
        _id: ID,
        CommitteeID: Committee,
        CategoryID: Category,
        BankAccountID: BankAccount,
        Payee: String,
        ExpenseDate: String,
        Amount: String,
        CheckNumber: String,
        Reconcile: String,
        Comment: String,
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },


    type Friend {
        _id: ID,
        OrganizationID: Organization,
        Title: String,
        FirstName: String,
        MiddleName: String,
        LastName: String,
        Suffix: String,
        CategoryID: String,
        ProgramAttendance: [Attendance],
        EventDate: Date,
        ContactID: Contact,
        AddressID: Address,
        StoryID: Story,
        Comment: String,
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },

      type Goal {
        _id: ID,
        CommitteeID: Committee,
        Title: String,
        Description: String,
        AssignedTo: String,
        BeginDate: Integer,
        EndDate: String,
        CompletionRatio: Date,
        SupervisorComment: String,
        TaskID: [Task],
        DocumentID: [Document],
        Status: String,
        Comment: String,
        EnteredBy: String,
        DateEntered: Date
      },

      type Income {
        _id: ID,
        CommitteeID: Committee,
        BankAccountID: BankAccount,
        IncomeDate: String,
        CashAmount: String,
        CategoryID: Category,
        CheckAmount: String,
        CoinAmount: String,
        Comment: String,
        EnteredBy: String,
        DateEntered: String
      },

      type ListTable {
        CommitteeID: Committee,
        ListTableID: ListTable,
        Value1: String,
        Value2: String,
        Value3: String,
        Value4: Integer,
        Value5: String,
        Value6: Date,
        Value7: String,
        Value8: String,
        Value9: String,
        Value10: String,
        EnteredBy: String,
        DateEntered: Date
      },

      type ListHeader {
        _id: ID,
        CommitteeID: Committee,
        ListTableID: ListTable,
        Type1: String,
        Type2: String,
        Type3: String,
        Type4: Integer,
        Type5: String,
        Type6: Date,
        Type7: String,
        Type8: String,
        Type9: String,
        Type10: String,
        FileName1: String,
        FileName2: String,
        FileName3: Strng,
        FileName4: String,
        FileName5: String,
        FileName6: String,
        FileName7: Date,
        FileName8: String,
        FileName9: String,
        FileName10: String,
        EnteredBy: String,
        DateEntered: String
      },

      type ListItem {
          _id: ID,
        CommitteeID: Committee,
        ListTableID: ListTable,
        Value1: String,
        Value2: String,
        Value3: String,
        Value4: Integer,
        Value5: String,
        Value6: Date,
        Value7: String,
        Value8: String,
        Value9: String,
        Value10: String,
        EneredBy: String,
        DateEntered: Date
      },

      type Meeting {
        _id: ID,
        CommitteeID: Committee,
        MeetingDate: String,
        Venue: String,
        StartTime: String,
        EndTime: Integer,
        Title: String,
        NextMeetingDate: Date,
        Status: String,
        CalendarID: Calendar,
        DocumentID: Document,
        Host: String,
        AttendanceID: [Attendance],
        MeetingNoteID: [MeetingNote],
        AnnouncementID: Announcement,
        EnteredBy: String,
        DateEntered: Date
      },

      type MeetingAgenda {
          _id: ID,
        CommitteeID: Committee,
        MeetingID: Meeting,
        Description: String,
        Status: String,
        TaskID: Task,
        EnteredBy: String,
        DateEntered: Date
      },

      type MeetingNote {
        _id: ID,
        CommitteeID: Committee,
        MeetingAgendaID: MeetingAgenda,
        Note: Note,
        NoteDate: String,
        Status: String,
        EnteredBy: String,
        DateEntered: Date
      },

      type Member {
          _id: ID,
          OrganizationID: Organization,
          FirstName: String,
          MiddleName: String,
          LastName: String,
          Suffix: String,
          DOB: Date,
          Gender: String,
          MembershipDate: Date,
          Title: String,
          ContactID: Contact,
          AddressID: Address,
          PhoneNumber: String,
          PhoneProviderID: String,
          Email: String,
          PictureID: [Picture],
          AnnouncementID: Announcement,
          MiscQuestionID: [MiscQuestion],
          StoryID: [Story],
          Status: String,
          EnteredBy: String,
          DateEntered: String
        },

        type MiscQuestion {
          _id: ID,
          OrganizationID: Organization,
          Question: String,
          Category: Category,
          Required: String,
          Sequence: String
        },

        type Officer {
          _id: ID,
          CommitteeID: Committee,
          Title: String,
          MemberID: Member,
          DateCreated: String,
          Description: String,
          Term: String,
          MiscQuestionID: [MisQuestion],
          Status: String,
          EnteredBy: String,
          DateEntered: Date
        },

      type Organization {
        _id: ID,
        Name: String,
        Address: String,
        Address2: String,
        City: String,
        State: String,
        Zip: String,
        Country: String,
        PhoneNumber: String,
        Email: String,
        YearFounded: String,
        FriendID: [Friend],
        ChildrenOrganizationID: [Organization],
        CommitteeID: [Committee],
        PrimaryCommitteeID: String,
        StoryID: [Story],
        PictureID: [Picture],
        VideoID: [Video],
        Description: String,
        Vision: String,
        Mission: String,
        Status: String,
        EnteredBy: String,
        DateEntered: Story,
        MainCommittee: Committee
      },

      type Payee {
        _id: ID,
        CommitteeID: Committee,
        BankAccountID: BankAccount,
        AccountNumber: String,
        PayeeName: String,
        URL: String,
        CategoryID: Category,
        Frequency: String,
        Description: Date,
        PhoneNumber: String,
        PayeeTypeID: String,
        Email: String,
        Status: String,
        EnteredBy: String,
        DateEntered: Date
      },

      type Picture {
        _id: ID,
        CommitteeID: Committee,
        PictureDate: Picture,
        Description: String,
        ImageData: String,
        ImageMimeType: Integer,
        PictureType: String,
        GroupID: Date,
        IsPublic: String,
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },

  type Post {
    _id: ID,
    title: String,
    content: String
  },

  type Product {
    _id: ID,
    CommitteeID: Committee,
    Name: String,
    Description: String,
    Price: String,
    Quantity: String,
    CategoryID: Category,
    PictureID: [Picture],
    DocumentID: [Document],
    StoryID: [Story],
    AnnouncementID: Announcement,
    EnteredBy: String,
    DateEntered: String
  },

  type ProductDiscount {
    _id: ID,
    CommitteeID: Committee,
    ProductID: Product,
    Discount: String,
    StartDate: String,
    EndDate: String,
    EnteredBy: String,
    DateEntered: String
  },

  type ProgramEvent {
    _id: ID,
    CommitteeID: Committee,
    GoalID: Goal,
    Title: String,
    _When: String,
    _Who: String,
    _Where: Integer,
    _What: String,
    _How: Date,
    BeginTime: String,
    EndTime: String,
    Status: String,
    CalendarID: Calendar,
    DocumentID: Document,
    PictureID: [Picture],
    AnnouncementID: Announcement,
    StoryID: Story,
    EventEndDate: String,
    ProgramAttendance: [Attendance],
    EnteredBy: String,
    DateEntered: String
  },

  type Property {
    _id: ID,
    OrganizationID: Organization,
    PurchaseDate: String,
    Value: String,
    Quantity: String,
    Location: String,
    AssignedTo: Member,
    Condition: String,
    TagNumber: Date,
    Title: String,
    Description: String,
    Comment: String,
    PictureID: Picture,
    DocumentID: Document,
    Status: String,
    EnteredBy: String,
    DateEntered: String
  },

  type Role {
    _id: ID,
    role: String
  }

  type Story {
    _id: ID,
    CommitteeID: Committee,
    Title: String,
    SubTitle: String,
    PrimaryName: String,
    URL: String,
    ArticleText: String,
    Publish:String,
    DocumentID: [Document],
    CreateDate: String,
    UpdateDate: String
  },

  type Task {
    _id: ID,
    CommitteeID: Committee,
    GoalID: Goal,
    Description: String,
    AssignedTo: Member,
    StartDate: String,
    EndDate: String,
    ActionItemID: [ActionItem],
    Comment: [String]

  },

  type User {
    _id: ID,
    OrganizationID: Organization,
    email: String,
    password: String,
    role: Role
  },



#--------------------------------------------------------------------------------------------
  #4 Define the query type that must respond to 'posts' query
#--------------------------------------------------------------------------------------------
  type Query {
    actionItems: [ActionItem],
    announcements: [Announcement],
    attendances: [Attendance],
    bankAccounts: [BankAccount],
    bankBalances: [BankBalance],
    bills: [Bill],
    budgets: [Budget],
    calendars: [Calendar],
    categories: [Category],
    committees: [Committee],
    constants: [Constant],
    contacts: [Contact],
    contributions: [Contribution],
    documents: [Document],
    expenses: [Expense],
    friends: [Friend],
    goals: [Goal],
    incomes: [Income],
    listHeaders: [ListHeder],
    listTable: [ListTable],
    listItems: [ListItem],
    meetings: [Meeting],
    meetingAgendas: [MeetingAgenda],
    meetingNotes: [MeetingNote],
    members: [Member],
    miscQuestions: [MiscQuestion],
    officers: [Officer],
    organizations: [Organization],
    payees: [Payee],
    pictures: [Picture],
    posts: [Post],
    products: [Product],
    ProductDiscounts: [ProductDiscount],
    programEvents: [ProgramEvent],
    properties: [Property],
    roles: [Role],
    stories: [Story],
    tasks: [Task],
    users: [User],
  },

#---------------------------------------------------------------------------------------------
  #5 Define a mutation to add new posts with two required fields
#---------------------------------------------------------------------------------------------
  type Mutation {

        addActionItem(
            OrganizationID: String!,
            ParentType: String!,
            ParentItemID: String!,
            ChildItemID: String!,
          ):ActionItem,

          addAnnouncement(
            OrganizationID: String!,
            CommitteeID: String!,
            Title: String!,
            BeginDate: String!,
            EndDate: String!,
            Message: String!,
            DocumentID: String,
            Status: String!,
            EnteredBy: String!,
            DateEntered: String!
          ):Announcement,

        addArticle(
                Title: String!,
                URL: String,
                ArticleText: String!,
                CreateDate: String!,
                UpdateDate: String
              ):Article,

          addAttendance(
            OrganizationID: String!,
            MemberID: String!,
            RollCall: String!,
            CalendarID: String!,
            EnteredBy: String!,
            DateEntered: String!
          ):Attendance,

          addBankAccount(
            OrganizationID: String!,
            BankName: String!,
            AccountNumber: String!,
            Description: String,
            ControlName: String,
            Status: String!,
            IsBudgeted: String,
            EnteredBy: String!,
            DateEntered: String!
          ):BankAccount,

          addBankBalance(
                  OrganizationID: String!,
                  BankAccountID: String!,
                  LastIncomeID: String!,
                  LastExpenseID: String!,
                  BeginDate: String!,
                  EndDate: String!,
                  BeginBalance: String!,
                  RevenueAmount: String!,
                  ExpenseAmount: String!,
                  EndingBalance: String!
                ):BankBalance,

                addBill(
                  OrganizationID: String!,
                  PayeeID: String!,
                  PayeeName: String!,
                  AccountNumber: String!,
                  TotalAmount: String!,
                  AmountDue: String!,
                  DateDue: String!,
                  Comment: String,
                  Status: String!,
                  EnteredBy: String!,
                  DateEntered: String!
                ):Bill,

                addBudget(
                  OrganizationID: String!,
                  BudgetYear: String!,
                  Type: String!,
                  SubCategoryID: String!,
                  Amount: String!,
                  Comment: String,
                  Status: String!,
                  EnteredBy: String!,
                  DateEntered: String!
                ):Budget,

                addCommittee(
                  OrganizationID: String!,
                  CommitteeName: String!,
                  Description: String,
                  Contact: String!,
                  ContactEmail: String!,
                  PhoneNumber: String!,
                  BriefDescription: String,
                  PageStyleID: String,
                  Status: String!,
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
                  EnteredBy: String!,
                  DateEntered: String!
                ):Committee,

                addConstant(
                  OrganizationID: String!,
                  Category: String!,
                  ConstantName: String!,
                  Value1: String!,
                  Value2: String,
                  Value3: String,
                  SortOrder: String,
                  Status: String!,
                  EnteredBy: String!,
                  DateEntered: String!
                ):Constant,

      addFamily(
         FamilyName: String!,
         Address: String,
         Address2: String,
         City: String,
         State: String,
         Zip: String,
         Status: String!,
         EnteredBy: String!,
         DateEntered: String!
       ): Family,

       addFriend(
        OrganizationID: String!,
        Title: String,
        FirstName: String!,
        LastName: String!,
        Suffix: String,
        SubCategoryID: String!,
        LastEventAttended: String,
        EventDate: String,
        PhoneNumber: String,
        PhoneProviderID: String,
        Email: String,
        BestContact: String!,
        Address: String,
        Address2: String,
        City: String,
        State: String,
        Zip: String,
        Comment: String,
        Status: String!,
        EnteredBy: String!,
        DateEntered: String!
      ):Friend,

      addMember(
        FamilyID: String!,
        OrganizationID: String!,
        FirstName: String!,
        MiddleName: String,
        LastName: String!,
        Suffix: String,
        DOB: String,
        Gender: String!,
        MembershipDate: String,
        Title: String,
        ContactTypeID: String,
        PhoneNumber: String,
        PhoneProviderID: String,
        Email: String,
        PictureID: String,
        Status: String!,
        EnteredBy: String!,
        DateEntered: String!
      ):Member,

      addOrganization(
        Name: String!,
        Address: String,
        Address2: String,
        City: String!,
        State: String,
        Zip: String,
        Country: String!,
        PhoneNumber: String!,
        Email: String!,
        YearFounded: String!,
        StoryID: String,
        PictureID: String,
        VideoID: String,
        Description: String!,
        Vision: String,
        Mission: String,
        Status: String!,
        EnteredBy: String!,
        DateEntered: String!,
        ParentID: String
      ): Organization,

      addPost(
        title: String!,
        content: String!
      ): Post,

      addUser(
        email: String!,
        password: String!
      ):User,
  },

`;

module.exports = typeDefs;
