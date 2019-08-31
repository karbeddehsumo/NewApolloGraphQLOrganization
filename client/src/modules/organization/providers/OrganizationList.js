import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const GET_ORGANIZATIONS = gql`
  {
    organizations {
      _id
      Name
      Address
      Address2
      City
      State
      Zip
      Country
      PhoneNumber
      Email
      YearFounded
      StoryID
      PictureID
      VideoID
      Description
      Vision
      Mission
      Status
      EnteredBy
      DateEntered
      ParentID
    }
  }
`;

const withOrganizations = Component => props => {
  return (
    <Query query={GET_ORGANIZATIONS}>
      {({ loading, data }) => {
        return (
          <Component organizationsLoading={loading} organizations={data && data.organizations} {...props} />
        );
      }}
    </Query>
  );
};

export default withOrganizations;
