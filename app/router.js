import React from 'react';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Home2 from './components/Home2';
import { browserHistory } from 'react-router';



export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/a' component={Home2} />
    </Route>
  </Router>
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