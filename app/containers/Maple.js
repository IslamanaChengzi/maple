import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as DemoActions from '../actions'

function mapStateToProps(state) {
  return { demo: state.demo };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(DemoActions, dispatch) }
}

class Maple extends React.Component {
  render() {
    return (
      <div>
        Maple
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maple)