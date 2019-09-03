import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.showUsers = this.showUsers.bind(this);
  }

  showUsers() {
    const { users, usersLoading } = this.props;

    if (!usersLoading && users.length > 0) {
      return users.map(user => {
        return (
          <Card key={user._id} body outline className="user-card">
            <CardTitle>{user.email}</CardTitle>
            <CardBody>{user.password}</CardBody>
          </Card>
        );
      });
    } else {
      return (
        <div>
          <h3>No users available</h3>
          <p>Use the form on the right to create a new user.</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="users-container">
        {this.showUsers()}
      </div>
    );
  }
}
