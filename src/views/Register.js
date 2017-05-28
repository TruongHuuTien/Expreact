import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
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
    axios.post('/api/user', {user: this.user})
    .then((res) => {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Card id="register-card">
          <CardTitle title="Inscription" />
          <form onSubmit={this.processForm}>
            <CardText>
              <TextField hintText="Hint Text" name="name" hintText="Nom" fullWidth={true} /><br />
              <TextField hintText="Hint Text" name="email" hintText="Email" fullWidth={true} /><br />
              <TextField hintText="Hint Text" name="password" hintText="Mot de passe" fullWidth={true} /><br />
            </CardText>
            <CardActions>
              <RaisedButton label="S'inscrire" type="submit" primary={true} />
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
}

export default Register;
