import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import router from './router';

//import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';

ReactDOM.render(
  <Router history={browserHistory}>
    {router}
  </Router>,
  document.getElementById('maple')
);

//let render = () => {
//  System.import('./router').then(router => {
//    ReactDOM.render(
//       <Router history={browserHistory}>
//         {router}
//       </Router>,
//      document.getElementById('maple')
//    );
//  });
//};
//render(
//  <Router history={browserHistory}>
//    {router}
//  </Router>,
//  document.getElementById('maple')
//);