import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link, IndexLink } from 'react-router-dom';
import Header from './views/components/Header.js';
import HomePage from './views/Home.js';
import RegisterPage from './views/Register.js';
import LoginPage from './views/Login.js';

ReactDom.render(
  <BrowserRouter>
    <div>
      <Route component={Header} />
      <Route exact path="/" component={HomePage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/login" component={LoginPage}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
