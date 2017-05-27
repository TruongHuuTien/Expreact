import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './src/config';
import Html from './src/view/Html.js';

const app = express();


/* React */
app.get('*', (req, res, next) => {
  const html = ReactDOMServer.renderToStaticMarkup(<Html />);
  res.send(`<!doctype html>${html}`);
});

app.listen(config.port, () => {
  console.info(`The server is running at http://localhost:${config.port}/`);
});
