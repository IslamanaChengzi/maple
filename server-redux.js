//var webpack = require('webpack')
//var webpackDevMiddleware = require('webpack-dev-middleware')
//var webpackHotMiddleware = require('webpack-hot-middleware')
//var config = require('./webpack.config')
//
//var app = new (require('express'))()
//var port = 3000;
//
//var compiler = webpack(config)
//app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
//app.use(webpackHotMiddleware(compiler));
//
//app.get("/", function(req, res) {
//  res.sendFile(__dirname + '/index.html')
//});
//
//app.listen(port, function(error) {
//  if (error) {
//    console.error(error)
//  } else {
//    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
//  }
//})
import path from 'path';
import Express from 'express';
import qs from 'qs';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import configureStore from './app/store/configureStore'
import App from './app/containers/MainContainer'
import { fetchCounter } from './app/api/counter'

const app = new Express();
const port = 3000;

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(handleRender);

function handleRender(req, res) {
  // Query our mock API asynchronously
  fetchCounter(apiResult => {
    // Read the counter from the request, if provided
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter, 10) || apiResult || 0;

    // Compile an initial state
    const initialState = { counter };

    // Create a new Redux store instance
    const store = configureStore(initialState);

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Grab the initial state from our Redux store
    const finalState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState));
  })
}

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="maple">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}
app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})