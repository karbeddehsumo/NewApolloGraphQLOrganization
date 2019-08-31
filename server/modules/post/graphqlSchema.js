// #1 Import the gql method from apollo-server-express
const { gql } = require('apollo-server-express');

// #2 Construct a schema with gql and using the GraphQL schema language
const typeDefs = gql`
  #3 Define the type Post with two fields
  type Post {
    _id: ID,
    title: String,
    content: String
  },
  #4 Define the query type that must respond to 'posts' query
  type Query {
    posts: [Post]
  },
  #5 Define a mutation to add new posts with two required fields
  type Mutation {
    addPost(title: String!, content: String!): Post,
  }
`;

module.exports = typeDefs;
