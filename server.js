import path from 'path';
import fs from 'fs';
import Express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import webpack from 'webpack';
//import rewrite from 'express-urlrewrite';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';



import swig from 'swig';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //中间键，diapatch异步实现
import { syncHistoryWithStore } from 'react-router-redux'
import rootReducer from './app/reducers/index'

import { I18nextProvider } from 'react-i18next';
import i18nMiddleware from 'i18next-express-middleware';
import i18n from './app/i18n-server';

//路由部分
//前端路由
import routes from './app/router.js';
//后端接口路由
import index from './routes/index';
//引入公共函数
import * as SEO from './app/lib/SEO';

const app = new Express();
const port = 4000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Express.static(path.join(__dirname, 'public')));
app.use(Express.static(path.join(__dirname, 'locales')));
//fs.readdirSync(__dirname).forEach(function (file) {
//  if (fs.statSync(path.join(__dirname, file)).isDirectory())
//    app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'));
//});

//引入 webpack 配置
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

//数据接口
//视图渲染
app.use(function(req, res) {
  match({ routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
    //res.send(200, routes);
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
      );

      const maple = renderToString(
        <I18nextProvider i18n={ i18n }>
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        </I18nextProvider>
      );
      const initialState = store.getState();
      let headSEO = SEO.headSEO(req.url);
      var page = swig.renderFile('./views/index.html', {title: headSEO.title, author: headSEO.author, keywords: headSEO.keywords, description: headSEO.description, maple: maple, initialState: initialState});
      res.status(200).send(page);
    } else {
      res.status(404).send('Not found');
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