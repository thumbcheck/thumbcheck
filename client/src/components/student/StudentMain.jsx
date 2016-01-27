import React from 'react';
import {connect} from 'react-redux';
import Wait from './StudentWaiting';
import StudentAnswering from './StudentAnswering';
import * as actionCreators from '../../action_creators';

export const Student = React.createClass({
  render: function() {
    return (
      <div>
        {(this.props.voting && !this.props.hasVoted)?
          <StudentAnswering ref="answer" {...this.props} /> :
          <Wait />}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    voting: state.get('voting'),
    upvote: state.getIn(['tally', 'thumbsUp']),
    downvote: state.getIn(['tally', 'thumbsDown']),
    hasVoted: state.get('hasVoted')
  };
}

export const StudentContainer = connect(
  mapStateToProps,
  actionCreators
)(Student);
