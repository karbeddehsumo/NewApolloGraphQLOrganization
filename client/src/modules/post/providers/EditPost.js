import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import { GET_POSTS } from '/PostList';

const EDIT_POST = gql`
  mutation($id: Int, $title: String!, $content: String!) {
    editPost(id: $id, title: $title, content: $content) {
      Title
      content
    }
  }
`;

const withEditPost = Component => props => {
  return (
    <Mutation mutation={EDIT_POST}>
      {editPost => {
        return (
            <Component editPost={({id, title, content}) => editPost({
              varables: {id, title, content}, refetchQueries: [
                { query: GET_POSTS }
              ] })}
            />
        )
      }}
    </Mutation>
  );
};

export default withEditPost;
