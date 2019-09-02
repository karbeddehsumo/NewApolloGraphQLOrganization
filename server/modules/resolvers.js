// #1 Import the Post model created with mongoose
const Post = require('./models/post');
const Organization = require('./models/organization');
const Family = require('./models/family');

// #2 Create resolver functions to handle GraphQL queries
/**
 * Query resolver "posts" must return values in response to
 * the query "posts" in GraphQL schema.
 */
const resolvers = {
  Query: {
    // Query which returns posts list
    families: () => Family.find({}),
    organizations: () => Organization.find({}),
    posts: () => Post.find({}),

  },

/**
 * Mutation resolver addPost creates a new document in MongoDB
 * in response to the "addPost" mutation in GraphQL schema.
 * The mutation resolvers must return the created object.
 */
  Mutation: {
    addFamily: (parent, family) => {
      const newFamily = new Family({
        FamilyName: family.FamilyName,
        Address: family.Address,
        Address2: family.Address2,
        City: family.City,
        State: family.State,
        Zip: family.Zip,
        Status: family.Status,
        EnteredBy: family.EnteredBy,
        DateEntered: family.DateEntered
      });
      return newFamily.save();
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

  }
};

module.exports = resolvers;
