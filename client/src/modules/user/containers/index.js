import React, { Component } from 'react'

import { withUsers } from '../providers';
import { UserList, UserForm } from '../components';

import { Container, Row, Col } from 'reactstrap';
import '../styles/styles.css';

/**
 * Wrap Users component using the withUsers provider
 * to get data retrieved with GraphQL.
 */
@withUsers
export default class UserRoot extends Component {
  render() {
    const { users, usersLoading } = this.props;

    return (
      <Container>
        <h2 className="users-title">Users Module</h2>
            <hr />
        <Row>
          <Col>
            <UserList usersLoading={usersLoading} users={users} />
          </Col>
          <Col>
            <UserForm />
          </Col>
        </Row>
      </Container>
    )
  }
}
