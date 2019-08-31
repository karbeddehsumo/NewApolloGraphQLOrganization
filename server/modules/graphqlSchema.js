// #1 Import the gql method from apollo-server-express
const { gql } = require('apollo-server-express');

// #2 Construct a schema with gql and using the GraphQL schema language
const typeDefs = gql`
  #---Post -------------------#
  #3 Define the type Post with two fields
  type Post {
    _id: ID,
    title: String,
    content: String
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
    StoryID: String,
    PictureID: String,
    VideoID: String,
    Description: String,
    Vision: String,
    Mission: String,
    Status: String,
    EnteredBy: String,
    DateEntered: String,
    ParentID: String
  },

  #4 Define the query type that must respond to 'posts' query
  type Query {
    posts: [Post],
    organizations: [Organization]
  },

  #5 Define a mutation to add new posts with two required fields
  type Mutation {
    addPost(
      title: String!,
      content: String!
    ): Post,

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
  },

`;

module.exports = typeDefs;
