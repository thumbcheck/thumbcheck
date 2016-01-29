import React from 'react';
import {connect} from 'react-redux';
import Wait from './StudentWaiting';
import WaitAnswered from './StudentAnsweredWaiting';
import io from 'socket.io-client';
import StudentAnswering from './StudentAnswering';
import * as actionCreators from '../../action_creators';

export const Student = React.createClass({
  renderProperElement: function() {
    if(!this.props.voting) {
      if(this.props.voting === false) {
        return <Wait/>;
      } else {
        return null;
      }
    } else if (this.props.hasVoted) {
      return <WaitAnswered />;
    } else {
      return <StudentAnswering ref="answer" {...this.props} />;
    }
  },
  render: function() {            
    return (
      <div className="student-container center-text">
          <h4>Room name: {this.props.room}</h4>
          <div className="student-content">   
            {this.renderProperElement()}
        </div>
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

export const StudentContainer = connect(mapStateToProps,actionCreators)(Student);
