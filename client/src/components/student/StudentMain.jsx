import React from 'react';
import {connect} from 'react-redux';
import Wait from './StudentWaiting';
import WaitAnswered from './StudentAnsweredWaiting';
import io from 'socket.io-client';
import StudentAnswering from './StudentAnswering';
import * as actionCreators from '../../action_creators';
import RaiseHand from './RaiseHand';

export const Student = React.createClass({
  askQuestion: function(name) {
    // change to not be hardcoded later
    const studentId = Math.floor(Math.random() * (1000 - 1) * 1);
    name = 'joey';    
    this.props.addQuestionToQueue(name, studentId);  
  },

 renderProperElement: function() {
   if(!this.props.voting) {
     if(this.props.voting === false) {
       return <Wait/>;
     } else {
       return null;
     }
   } else if (this.props.hasVoted || window.localStorage.getItem('hasVoted')==='true') {
     return <WaitAnswered />;
   } else {
     return <StudentAnswering ref="answer" {...this.props} />;
   }
 },
 render: function() {  
  console.log('state student', this.props);
  console.log('this.props.takingQuestions', this.props.takingQuestions);
  if (this.props.takingQuestions) {
    console.log('this.props.takingQuestions.allowQuestions', this.props.takingQuestions.allowQuestions);
    console.log('this.props.takingQuestions._root.entries[0][1]', this.props.takingQuestions._root.entries[0][1]);
  }
   return (
     <div className="student-container center-text">
        <h4 onClick={this.askQuestion}>Room name: {this.props.currentRoom}</h4>
        <div className="student-content">
           {this.renderProperElement()}  
        </div>
        {(this.props.takingQuestions && this.props.takingQuestions._root.entries[0][1]) ?
          <RaiseHand {...this.props} /> :
          null
        }
     </div>
   );
 }
});

function mapStateToProps(state) {
 return {
   voting: state.get('voting'),
   upvote: state.getIn(['tally', 'thumbsUp']),
   downvote: state.getIn(['tally', 'thumbsDown']),
   hasVoted: state.get('hasVoted'),
   handRaised: state.get('handRaised')
 };
}

export const StudentContainer = connect(mapStateToProps,actionCreators)(Student);
