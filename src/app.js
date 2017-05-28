import React from 'react';
import ReactDom from 'react-dom';
import {lime200, orange800 } from 'material-ui/styles/colors';
import { BrowserRouter, Route, Link, IndexLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './views/components/Header.js';
import HomePage from './views/Home.js';
import RegisterPage from './views/Register.js';
import LoginPage from './views/Login.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const interactionTheme = getMuiTheme({
  palette: {
    primary1Color: orange800,
  },
  appBar: {
    height: 40,
  },
});

ReactDom.render(
  <MuiThemeProvider muiTheme={interactionTheme}>
    <BrowserRouter>
      <div>
        <Route component={Header} />
        <Route exact path="/" component={HomePage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/login" component={LoginPage}/>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
