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
      StoryID: event.target.StoryID.value,
      PictureID: event.target.PictureID.value,
      VideoID: event.target.VideoID.value,
      Description: event.target.Description.value,
      Vision: event.target.Vision.value,
      Mission: event.target.Mission.value,
      Status: event.target.Status.value,
      EnteredBy: event.target.EnteredBy.value,
      DateEntered: event.target.DateEntered.value,
      ParentID: event.target.ParentID.value,
    });
  }

  render() {
    return (
      <div className="organization-form">
        <h2>Create New Organization</h2>
        <Form onSubmit={(event) => this.submitForm(event)}>
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input type="text" Name="title" id="Name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="Address">Address</Label>
            <Input type="textarea" name="Address" id="Address" placeholder="Address" />
          </FormGroup>

          <FormGroup>
            <Label for="Address2">Address2</Label>
            <Input type="text" Name="Address2" id="Address2" placeholder="Address2" />
          </FormGroup>
          <FormGroup>
            <Label for="City">City</Label>
            <Input type="text" Name="City" id="City" placeholder="City" />
          </FormGroup>
          <FormGroup>
            <Label for="State">State</Label>
            <Input type="text" Name="State" id="State" placeholder="State" />
          </FormGroup>
          <FormGroup>
            <Label for="Zip">Zip</Label>
            <Input type="text" Name="Zip" id="Zip" placeholder="Zip" />
          </FormGroup>
          <FormGroup>
            <Label for="Country">Country</Label>
            <Input type="text" Name="Country" id="Country" placeholder="Country" />
          </FormGroup>
          <FormGroup>
            <Label for="PhoneNumber">Phone Number</Label>
            <Input type="text" Name="PhoneNumber" id="PhoneNumber" placeholder="Phone Number" />
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="text" Name="Email" id="Email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="YearFounded">Year Founded</Label>
            <Input type="text" Name="YearFounded" id="YearFounded" placeholder="Year Founded" />
          </FormGroup>
          <FormGroup>
            <Label for="StoryID">StoryID</Label>
            <Input type="text" Name="StoryID" id="StoryID" placeholder="StoryID" />
          </FormGroup>
          <FormGroup>
            <Label for="PictureID">PictureID</Label>
            <Input type="text" Name="PictureID" id="PictureID" placeholder="PictureID" />
          </FormGroup>

          <FormGroup>
            <Label for="VideoID">VideoID</Label>
            <Input type="textarea" name="VideoID" id="VideoID" placeholder="VideoID" />
          </FormGroup>
          <FormGroup>
            <Label for="Description">Description</Label>
            <Input type="textarea" name="Description" id="Description" placeholder="Description" />
          </FormGroup>
          <FormGroup>
            <Label for="Vision">Vision</Label>
            <Input type="textarea" name="Vision" id="Vision" placeholder="Vision" />
          </FormGroup>
          <FormGroup>
            <Label for="Mission">Mission</Label>
            <Input type="textarea" name="Mission" id="Mission" placeholder="Mission" />
          </FormGroup>
          <FormGroup>
            <Label for="Status">Status</Label>
            <Input type="textarea" name="Status" id="Status" placeholder="Status" />
          </FormGroup>
          <FormGroup>
            <Label for="EnteredBy">Address</Label>
            <Input type="textarea" name="EnteredBy" id="EnteredBy" placeholder="EnteredBy" />
          </FormGroup>
          <FormGroup>
            <Label for="DateEntered">Address</Label>
            <Input type="textarea" name="DateEntered" id="DateEntered" placeholder="DateEntered" />
          </FormGroup>
          <FormGroup>
            <Label for="ParentID">Address</Label>
            <Input type="textarea" name="ParentID" id="ParentID" placeholder="ParentID" />
          </FormGroup>

          <Button className="submit-button">Submit new organization</Button>
        </Form>
      </div>
    )
  }
}
