import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Home extends React.Component {

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
    axios.post('/auth/login', {user: this.user})
    .then((res) => {
      window.jwt = res.data.jwt;
      this.props.history.push('/app');
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
  }

  render() {
    return (
      <div id="homePage">
      <Card id="home-login-card">
        <CardTitle title="Connexion" />
        <form onSubmit={this.processForm}>
          <CardText>
            <TextField type="email" name="email" hintText="Email" fullWidth={true} /><br />
            <TextField type="password" name="password" hintText="Mot de passe" fullWidth={true} /><br />
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

export default Home;
