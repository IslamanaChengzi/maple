import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import router from './router';

//import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';

render(
  <Router history={browserHistory}>
    {router}
  </Router>,
  document.getElementById('maple')
);