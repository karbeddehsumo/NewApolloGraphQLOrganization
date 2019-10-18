import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { withAddOrganization } from '../providers';

@withAddOrganization
export default class OrganizationForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    this.props.addOrganization({

      Name: event.target.Name.value,
      Address: event.target.Address.value,
      Address2: event.target.Address2.value,
      City: event.target.City.value,
      State: event.target.State.value,
      Zip: event.target.Zip.value,
      Country: event.target.Country.value,
      PhoneNumber: event.target.PhoneNumber.value,
      Email: event.target.Email.value,
      YearFounded: event.target.YearFounded.value,
      Description: event.target.Description.value,
      Vision: event.target.Vision.value,
      Mission: event.target.Mission.value,
      Status: event.target.Status.value,
      EnteredBy: event.target.EnteredBy.value,
      DateEntered: event.target.DateEntered.value,

    });
  }

  render() {
    return (
      <div className="organization-form">
        <h2>Create New Organization</h2>
        <Form onSubmit={(event) => this.submitForm(event)}>
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input type="text" name="title" id="Name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="Address">Address</Label>
            <Input type="text" name="Address" id="Address" placeholder="Address" />
          </FormGroup>

          <FormGroup>
            <Label for="Address2">Address2</Label>
            <Input type="text" name="Address2" id="Address2" placeholder="Address2" />
          </FormGroup>
          <FormGroup>
            <Label for="City">City</Label>
            <Input type="text" name="City" id="City" placeholder="City" />
          </FormGroup>
          <FormGroup>
            <Label for="State">State</Label>
            <Input type="text" name="State" id="State" placeholder="State" />
          </FormGroup>
          <FormGroup>
            <Label for="Zip">Zip</Label>
            <Input type="text" name="Zip" id="Zip" placeholder="Zip" />
          </FormGroup>
          <FormGroup>
            <Label for="Country">Country</Label>
            <Input type="text" name="Country" id="Country" placeholder="Country" />
          </FormGroup>
          <FormGroup>
            <Label for="PhoneNumber">Phone Number</Label>
            <Input type="text" name="PhoneNumber" id="PhoneNumber" placeholder="Phone Number" />
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="text" name="Email" id="Email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="YearFounded">Year Founded</Label>
            <Input type="text" name="YearFounded" id="YearFounded" placeholder="Year Founded" />
          </FormGroup>
          <FormGroup>
            <Label for="Description">Description</Label>
            <Input type="text" name="Description" id="Description" placeholder="Description" />
          </FormGroup>
          <FormGroup>
            <Label for="Vision">Vision</Label>
            <Input type="text" name="Vision" id="Vision" placeholder="Vision" />
          </FormGroup>
          <FormGroup>
            <Label for="Mission">Mission</Label>
            <Input type="text" name="Mission" id="Mission" placeholder="Mission" />
          </FormGroup>
          <FormGroup>
            <Label for="Status">Status</Label>
            <Input type="text" name="Status" id="Status" placeholder="Status" />
          </FormGroup>
          <FormGroup>
            <Label for="EnteredBy">Entered By</Label>
            <Input type="text" name="EnteredBy" id="EnteredBy" placeholder="EnteredBy" />
          </FormGroup>
          <FormGroup>
            <Label for="DateEntered">Date Entered</Label>
            <Input type="text" name="DateEntered" id="DateEntered" placeholder="DateEntered" />
          </FormGroup>


          <Button className="submit-button">Submit new organization</Button>
        </Form>
      </div>
    )
  }
}
