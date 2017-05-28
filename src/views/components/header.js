import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div id="header">
        <AppBar title="Interaction" showMenuIconButton={false}>
        </AppBar>
      </div>
    )
  }
}

export default Header
