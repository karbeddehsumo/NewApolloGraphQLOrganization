// #1 Import the gql method from apollo-server-express
const { gql } = require('apollo-server-express');

// #2 Construct a schema with gql and using the GraphQL schema language
const typeDefs = gql`
  #---Post -------------------#
  #3 Define the type Post with two fields

  type ActionItem {
      _id: ID,
      Task: Task,
      Description: String,
      AssignedTo: String,
      StartDate: String,
      EndDate: String,
      Comment: [String]
    },

    type Address {
      _id: ID,
      Address1: String,
      Address2: String,
      City: String,
      State: String,
      Zip: String
    },

    type Announcement {
        _id: ID,
        Committee: Committee,
        Title: String,
        BeginDate: String,
        EndDate: String,
        Message: String,
        Document: Document,
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },

  type Attendance {
    _id: ID,
    Meeting: Meeting,
    Member: Member,
    RollCall: String,
    EnteredBy: String,
    DateEntered: String
  },

  type BankAccount {
      _id: ID,
      Committee: Committee,
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
        Committee: Committee,
        BankAccount: BankAccount,
        LastIncome: Income,
        LastExpense: Expense,
        BeginDate: String,
        EndDate: String,
        BeginBalance: String,
        RevenueAmount: String,
        ExpenseAmount: String,
        EndingBalance: String
      },

      type Bill {
        _id: ID,
        Committee: Committee,
        Payee: Payee,
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
        Committee: Committee,
        BudgetYear: String,
        Type: String,
        SubCategory: SubCategory,
        Amount: String,
        Comment: String,
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },

      type Calendar {
        id: ID,
        Committee: Committee,
        Title: String,
        EventType: String,
        StartDate: String,
        EndDate: String,
        Location: String,
        Description: String,
        Host: String,
        PublicAccess: String,
        Document: Document,
        Picture: Picture,
        DisplayBanner: String,
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },

      type Committee {
        _id: ID,
        Organization: Organization,
        CommitteeName: String,
        Description: String,
        Contact: String,
        ContactEmail: String,
        PhoneNumber: String,
        BriefDescription: String,
        PageStyle: PageStyle,
        Status: String,
        CodeDesc: String,
        StoryCreateAccess: String,
        PictureCreateAccess: String,
        VideoCreateAccess: String,
        IsPublic: String,
        DefaultMemberType: String,
        IsGroupCommittee: String,
        Picture: [Picture],
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
      },

      type CommitteeMember {
        id: ID,
        Committee: Committee,
        Member: Member
      },

      type Constant {
        _id: ID,
        Organization: Organization,
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
        id: ID,
        Cell: String,
        Email: String,
        BestContact: String
      },

      type Contribution {
        id: ID,
        Committee: Committee,
        Member: Member,
        Amount: String,
        ContributionDate: String,
        CheckNumber: String,
        SubCategory: SubCategory,
        EnteredBy: String,
        DateEntered: String
      },

      type Document {
        id: ID,
        Committee: Committee,
        Title: String,
        DocumentType: DocumentType,
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



  type Family {
      _id: ID,
      FamilyName: String,
      Address: String,
      Address2: String,
      City: String,
      State: String,
      Zip: String,
      Status: String!,
      EnteredBy: String!,
      DateEntered: String!
    },


    type Friend {
        _id: ID,
        Organization: Organization,
        Title: String,
        FirstName: String,
        LastName: String,
        Suffix: String,
        SubCategory: SubCategory,
        LastEventAttended: String,
        EventDate: String,
        PhoneNumber: String,
        PhoneProvider: PhoneProvider,
        Email: String,
        BestContact: String,
        Address: String,
        Address2: String,
        City: String,
        State: String,
        Zip: String,
        Comment: String,
        Status: String,
        EnteredBy: String,
        DateEntered: String
      },

      type FriendEventAttencance {
        id: ID,
        ProgramEvent: ProgramEvent,
        Friend: Friend
      },

      type Member {
          _id: ID,
          Family: Family,
          Organization: Organization,
          FirstName: String,
          MiddleName: String,
          LastName: String,
          Suffix: String,
          DOB: String,
          Gender: String,
          MembershipDate: String,
          Title: String,
          ContactType: ContactType,
          PhoneNumber: String,
          PhoneProvider: PhoneProvider,
          Email: String,
          Picture: [Picture],
          Status: String,
          EnteredBy: String,
          DateEntered: String
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
        Story: [Story],
        Picture: [Picture],
        Video: [Video],
        Description: String,
        Vision: String,
        Mission: String,
        Status: String!,
        EnteredBy: String!,
        DateEntered: String!,
        Parent: Organization
        Children: [Organization]
      },

  type Post {
    _id: ID,
    title: String,
    content: String
  },

  type Role {
    role: String
  }

  type User {
    _id: ID,
    email: String,
    password: String
    roles: [role]
  },



#--------------------------------------------------------------------------------------------
  #4 Define the query type that must respond to 'posts' query
#--------------------------------------------------------------------------------------------
  type Query {
    actionItems: [ActionItem],
    announcements: [Announcement],
    articles: [Article],
    attendances: [Attendance],
    bankAccounts: [BankAccount],
    bankBalances: [BankBalance],
    bills: [Bill],
    budgets: [Budget],
    committees: [Committee],
    constants: [Constant],
    families: [Family],
    friends: [Friend],
    members: [Member],
    organizations: [Organization],
    posts: [Post],
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
