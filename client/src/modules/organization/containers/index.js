import React, { Component } from 'react'

import { withOrganizations } from '../providers';
import { OrganizationList, OrganizationForm } from '../components';

import { Container, Row, Col } from 'reactstrap';
import '../styles/styles.css';

/**
 * Wrap Posts component using the withPosts provider
 * to get data retrieved with GraphQL.
 */
@withOrganizations
export default class OrganizationRoot extends Component {
  render() {
    const { organizations, organizationsLoading } = this.props;

    return (
      <Container>
        <h2 className="organizations-title">Organizations Module</h2>
            <hr />
        <Row>
          <Col>
            <OrganizationList organizationsLoading={organizationsLoading} organizations={organizations} />
          </Col>
          <Col>
            <OrganizationForm />
          </Col>
        </Row>
      </Container>
    )
  }
}
