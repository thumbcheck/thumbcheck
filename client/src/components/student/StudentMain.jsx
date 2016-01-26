import React from 'react';
import {connect} from 'react-redux';
import Answer from './StudentAnswering';
import Wait from './StudentWaiting';
import * as actionCreators from '../action_creators';

export const Student = React.createClass({
  render: function() {
    return <div>
      {this.props.wait ?
        <Wait {...this.props} /> :
        <Answer ref="answer" upvote={this.props.upvote} downvote={this.props.downvote} />}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    wait: state.get('wait'),
    upvote: state.get('upvote'),
    downvote: state.get('downvote')
  };
}

export const StudentContainer = connect(
  mapStateToProps,
  actionCreators
)(Student);
