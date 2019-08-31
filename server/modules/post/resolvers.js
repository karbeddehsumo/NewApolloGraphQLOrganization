// #1 Import the Post model created with mongoose
const Post = require('./models/post');

// #2 Create resolver functions to handle GraphQL queries
/**
 * Query resolver "posts" must return values in response to
 * the query "posts" in GraphQL schema.
 */
const resolvers = {
  Query: {
    // Query which returns posts list
    posts: () => Post.find({}),
  },

/**
 * Mutation resolver addPost creates a new document in MongoDB
 * in response to the "addPost" mutation in GraphQL schema.
 * The mutation resolvers must return the created object.
 */
  Mutation: {
    addPost: (parent, post) => {
      // Create a new post
      const newPost = new Post({ title: post.title, content: post.content });
      // Save new post and return it
      return newPost.save();
    }
  }
};

module.exports = resolvers;
