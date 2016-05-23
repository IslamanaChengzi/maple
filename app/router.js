import React from 'react';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //中间键，diapatch异步实现
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from './reducers/index'

import Demo from './components/Demo';
import Maple from './containers/Maple';
import Home from './containers/Home';

export default (
  <Route path='/' component={Maple}>
    <IndexRoute component={Home}/>
    <Route path='demo' component={Demo} />
  </Route>
);

//const routes = React.createClass({
//  render() {
//    return (
//      <Router history={this.props.history}>
//        <Route component={App}>
//          <Route path='/' component={Home} />
//          <Route path='/a' component={Home2} />
//        </Route>
//      </Router>
//    );
//  }
//});
//export default routes;