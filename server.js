import path from 'path';
import fs from 'fs';
import Express from 'express';
var logger = require('morgan');
var bodyParser = require('body-parser');

import webpack from 'webpack';
var rewrite = require('express-urlrewrite');
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


import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //中间键，diapatch异步实现
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from './app/reducers/index'


const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  lazy: true,
  hot: true,
  inline:true,
  stats: { colors: true },
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true
}));
app.use(webpackHotMiddleware(compiler));

fs.readdirSync(__dirname).forEach(function (file) {
  if (fs.statSync(path.join(__dirname, file)).isDirectory())
    app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
});

app.use(function(req, res) {
  match({ routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
    //res.send(200, routes);
    if (error) {
      res.send(500, error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
      );
      const maple = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      );
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