import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Test = React.createClass({
  render: function() {
    console.log(this.props.voting);
    return (
      <div>
      {this.props.voting.toString()} Hello
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    voting: state.getIn(['voting']),
  };
}

export const TestContainer = connect(mapStateToProps, actionCreators)(Test)
