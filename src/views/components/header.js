import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div id="header">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Sign up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header
