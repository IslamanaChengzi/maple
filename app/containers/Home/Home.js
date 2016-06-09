import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router';

import * as Actions from '../../actions';

if (process.env.BROWSER) {
  require("./home.less");
}


function mapStateToProps(state) {
  return { maple: state.maple };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) }
}


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="home">
        Hello Maple!!
      </section>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)