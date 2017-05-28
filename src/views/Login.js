import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.user = {
      email: '',
      password: ''
    };
    this.processForm = this.processForm.bind(this);
  }

  processForm(event) {
    event.preventDefault();
    this.user = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    console.log(this.user);
  }
  render() {
    return (
      <div>
        <Card id="login-card">
          <CardTitle title="Connexion" />
          <form onSubmit={this.processForm}>
            <CardText>
              <TextField hintText="Hint Text" name="email" hintText="Email" fullWidth={true} /><br />
              <TextField hintText="Hint Text" name="password" hintText="Mot de passe" fullWidth={true} /><br />
            </CardText>
            <CardActions>
              <RaisedButton label="Se connecter" type="submit" primary={true} />
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
}

export default Login;
