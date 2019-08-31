import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import { GET_ORGANIZATIONS } from './OrganizationList';

const ADD_ORGANIZATION = gql`
  mutation(
    $Name: String!,
    $Address: String,
    $Address2: String,
    $City: String!,
    $State: String,
    $Zip: String,
    $Country: String!,
    $PhoneNumber: String!,
    $Email: String!,
    $YearFounded: String!,
    $StoryID: String,
    $PictureID: String,
    $VideoID: String,
    $Description: String!,
    $Vision: String,
    $Mission: String,
    $Status: String!,
    $EnteredBy: String!,
    $DateEntered: String!,
    $ParentID: String
  ) {
    addOrganization(
      Name: $Name,
      Address: $Address,
      Address2: $Address2,
      City: $City,
      State: $State,
      Zip: $Zip,
      Country: $Country,
      PhoneNumber: $PhoneNumber,
      Email: $Email,
      YearFounded: $YearFounded,
      StoryID: $StoryID,
      PictureID: $PictureID,
      VideoID: $VideoID,
      Description: $Description,
      Vision: $Vision,
      Mission: $Mission,
      Status: $Status,
      EnteredBy: $EnteredBy,
      DateEntered: $DateEntered,
      ParentID: $ParentID
    ) {
      Name
      Description
      City
      Country
      YearFounded
      PhoneNumber
      Email
    }
  }
`;

const withAddOrganization = Component => props => {
  return (
    <Mutation mutation={ADD_ORGANIZATION}>
      {addOrganization => {
        return (
          <Component addOrganization={({
             Name,
             Address,
             Address2,
             City,
             State,
             Zip,
             Country,
             PhoneNumber,
             Email,
             YearFounded,
             StoryID,
             PictureID,
             VideoID,
             Description,
             Vision,
             Mission,
             Status,
             EnteredBy,
             DateEntered,
             ParentID
           }) => addOrganization({
            variables: {
              Name,
              Address,
              Address2,
              City,
              State,
              Zip,
              Country,
              PhoneNumber,
              Email,
              YearFounded,
              StoryID,
              PictureID,
              VideoID,
              Description,
              Vision,
              Mission,
              Status,
              EnteredBy,
              DateEntered,
              ParentID
            }, refetchQueries: [
              { query: GET_ORGANIZATIONS }
            ] })}
          />
        )
      }}
    </Mutation>
  );
};

export default withAddOrganization;
