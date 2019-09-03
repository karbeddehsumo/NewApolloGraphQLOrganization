import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { withAddUser } from '../providers';

@withAddUser
export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    this.props.addUser({
      email: event.target.email.value,
      password: event.target.password.value
    });
  }

  render() {
    return (
      <div className="user-form">
        <h2>Create new user</h2>
        <Form onSubmit={(event) => this.submitForm(event)}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" name="email" id="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="text" name="password" id="password" placeholder="password" />
          </FormGroup>
          <Button className="submit-button">Submit new user</Button>
        </Form>
      </div>
    )
  }
}
