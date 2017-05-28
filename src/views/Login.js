import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <FormGroup>
            <FormControl type="text" />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default Login;
