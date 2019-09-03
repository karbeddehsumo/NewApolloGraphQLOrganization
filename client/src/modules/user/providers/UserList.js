import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const GET_USERS = gql`
  {
    users {
      _id
      email
      password
    }
  }
`;

const withUsers = Component => props => {
  return (
    <Query query={GET_USERS}>
      {({ loading, data }) => {
        return (
          <Component usersLoading={loading} users={data && data.users} {...props} />
        );
      }}
    </Query>
  );
};

export default withUsers;
