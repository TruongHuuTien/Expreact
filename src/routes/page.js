import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Router from 'universal-router';
import Html from '../views/components/Html.js';
import HomeView from '../views/Home.js';
import LoginView from '../views/Login.js';
import RegisterView from '../views/Register.js';

const expressRouter = express.Router();
const routes = [{
  path: "/",
  action: () => {
    return {
      title: "Page d'accueil",
      components: <HomeView />
    }
  }
}, {
  path: "/login",
  action: () => {
    return {
      title: "Login",
      components: <LoginView />
    }
  }
}, {
  path: "/register",
  action: () => {
    return {
      title: "Inscription",
      components: <RegisterView />
    }
  }
}, {
  path: '*',
  action: () => {
    return {
      title: "404",
      components: <h1>Page introuvable</h1>
    }
  }
}];
const router = new Router(routes);

/* React */
expressRouter.get('*', (req, res) => {
  const route = router.resolve({path: req.path}).then((routeData) => {
    const html = ReactDOMServer.renderToStaticMarkup(<Html {...req}>{routeData}</Html>);
    res.send(`<!doctype html>${html}`);
  });

});

module.exports = expressRouter;
