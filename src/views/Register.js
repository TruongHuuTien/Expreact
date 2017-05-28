import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
          <TextField hintText="Hint Text" name="name" hintText="Nom" />
          <TextField hintText="Hint Text" name="email" hintText="Email" />
          <TextField hintText="Hint Text" name="password" hintText="Mot de passe" />
          <RaisedButton label="S'inscrire" primary={true} />
        </form>
      </div>
    );
  }
}

export default Register;
