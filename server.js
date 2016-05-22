import path from 'path';
import Express from 'express';
var logger = require('morgan');
var bodyParser = require('body-parser');

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';

import swig from 'swig';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './app/router.js';


const app = new Express();
const port = 3000;

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(function(req, res) {
  match({ routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
    //res.send(200, routes);
    if (error) {
      res.send(500, error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var maple = renderToString(React.createElement(RouterContext, renderProps));
      var page = swig.renderFile('./views/index.html', {maple: maple});
      res.send(200, page);
      //res.render('index', {maple: maple});
    } else {
      res.send(404, 'Not found');
    }
  });
});

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
});