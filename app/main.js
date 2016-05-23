import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routers from './router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //中间键，diapatch异步实现
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from './reducers/index'

import App from './containers/Maple';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore (browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {Routers}
    </Router>
  </Provider>,
  document.getElementById('maple')
);
