import React, { Component, PropTypes } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        App
        { children }
      </div>
    );
  }
}

export default connect(
  null
)(App);