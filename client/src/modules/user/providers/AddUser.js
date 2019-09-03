import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import { GET_USERS } from './UserList';

const ADD_USER = gql`
  mutation($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      email
      password
    }
  }
`;

const withAddUser = Component => props => {
  return (
    <Mutation mutation={ADD_USER}>
      {addUser => {
        return (
          <Component addUser={({ email, password }) => addUser({
            variables: { email, password }, refetchQueries: [
              { query: GET_USERS }
            ] })}
          />
        )
      }}
    </Mutation>
  );
};

export default withAddUser;
