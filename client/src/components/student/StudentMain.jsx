import React from 'react';
import {connect} from 'react-redux';
import Wait from './StudentWaiting';
import Answer from './StudentAnswering';
import * as actionCreators from '../../action_creators';

export const Student = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.voting ?
          <Answer ref="answer" upvote={this.props.upvote} downvote={this.props.downvote} /> :
          <Wait />}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    voting: state.get('voting'),
    upvote: state.getIn(['tally', 'thumbsUp']),
    downvote: state.getIn(['tally', 'thumbsDown'])
  };
}

export const StudentContainer = connect(
  mapStateToProps,
  actionCreators
)(Student);
