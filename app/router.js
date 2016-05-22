import React from 'react';
import { Route, Link, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Home2 from './components/Home2';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/a' component={Home2} />
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