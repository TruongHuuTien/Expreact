import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Router from 'universal-router';
import Html from '../view/Html.js';
import HomeView from '../view/Home.js';

const expressRouter = express.Router();
const routes = [
  {
    path: "/",
    action: () => {
      return {
        title: "Page d'accueil",
        components: <HomeView />
      }
    }
  },
  {
    path: '*',
    action: () => {
      return {
        title: "404",
        components: <h1>Page introuvable</h1>
      }
    }
  }
]
const router = new Router(routes);

/* React */
expressRouter.get('*', (req, res) => {
  const route = router.resolve({path: req.path}).then((routeData) => {
    const html = ReactDOMServer.renderToStaticMarkup(<Html>{routeData}</Html>);
    res.send(`<!doctype html>${html}`);
  });

});

module.exports = expressRouter;
