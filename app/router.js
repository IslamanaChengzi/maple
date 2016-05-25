import React from 'react';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';

import Demo from './components/Demo';
import Maple from './containers/Maple';
import Home from './containers/Home';

export default (
  <Route path='/' component={ Maple } >
    <IndexRoute component={ Home } />
    <Route path='demo' component={ Demo } />
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