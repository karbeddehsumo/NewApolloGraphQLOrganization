import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

export default class OrganizationList extends Component {
  constructor(props) {
    super(props);

    this.showOrganizations = this.showOrganizations.bind(this);
  }

  showOrganizations() {
    const { organizations, organizationsLoading } = this.props;

    if (!organizationsLoading && organizations.length > 0) {
      return organizations.map(organization => {
        return (
          <Card key={organization._id} body outline className="organization-card">
            <CardTitle>Name: {organization.Name}</CardTitle>
            <CardBody>Description: {organization.Description}</CardBody>
            <CardBody>Founded: {organization.YearFounded}</CardBody>
            <CardBody>Location: {organization.City}, {organization.Country}</CardBody>
          </Card>
        );
      });
    } else {
      return (
        <div>
          <h3>No organizations available</h3>
          <p>Use the form on the right to add a new organization.</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="organizations-container">
        {this.showOrganizations()}
      </div>
    );
  }
}
