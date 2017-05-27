import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from '../view/Html.js';

const router = express.Router();

/* React */
router.get('*', (req, res, next) => {
  const html = ReactDOMServer.renderToStaticMarkup(<Html />);
  res.send(`<!doctype html>${html}`);
});

module.exports = router;
