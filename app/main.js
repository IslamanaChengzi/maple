import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routers from './router';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n-client';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //中间键，diapatch异步实现
import { syncHistoryWithStore } from 'react-router-redux';

import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore (browserHistory, store);

ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <Provider store={store}>
      <Router history={history}>
        {Routers }
      </Router>
    </Provider>
  </I18nextProvider>,
  document.getElementById('maple')
);
