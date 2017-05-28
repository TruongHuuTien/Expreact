import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.user = {
      name: '',
      email: '',
      password: ''
    };
    this.processForm = this.processForm.bind(this);
  }

  processForm(event) {
    event.preventDefault();
    this.user = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    }
    console.log(this.user);
    axios.post('/api/user', {user: this.user})
    .then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <h1>Inscription</h1>
        <form onSubmit={this.processForm}>
          <FormGroup>
            <FormControl type="text" name="name" />
            <FormControl type="text" name="email" />
            <FormControl type="password" name="password" />
            <Button type="submit" bsStyle="primary">Sign up</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default Register;
