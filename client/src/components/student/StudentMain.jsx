import React from 'react';
import {connect} from 'react-redux';
import Wait from './StudentWaiting';
import WaitAnswered from './StudentAnsweredWaiting';
import StudentAnswering from './StudentAnswering';
import io from 'socket.io-client';
import * as actionCreators from '../../action_creators';
import RaiseHand from './RaiseHand';
import BinaryThumbsGraph from '../results-graphs/BinaryThumbs';
import checkHasVoted from '../../helpers/checkHasVoted';
import renderCorrectGraphType from '../../helpers/renderCorrectGraphType';
import {toJS, fromJS} from 'immutable';

export const Student = React.createClass({
 renderProperElement: function() {
   if(!this.props.voting) {
     if(this.props.voting === false) {
       return <Wait/>;
     } else {
       return null;
     }
   } else if (checkHasVoted(this.props.haveVoted, window.localStorage.getItem('participantID'))) {
     return <WaitAnswered />;
   } else {
     return <StudentAnswering ref="answer" {upvote=this.props.upvote 
                                            downvote=this.props.downvote
                                            vote=this.props.vote
                                            multipleChoiceAnswer=this.props.multipleChoiceAnswer
                                            openResponse=this.props.openResponse
                                            questionType=this.props.questionType} />;
   }
 },
 render: function() {
   console.log('on student main', this.props);
   return (
     <div className="student-container center-text">
         <h4>Room name: <strong>{this.props.currentRoom}</strong></h4>
         <h4><strong>{this.props.numUsers}</strong> device(s) currently in this room</h4>
         <div className="student-content">
           {this.renderProperElement()}
        </div>
        {(this.props.takingQuestions && this.props.takingQuestions._root.entries[0][1]) ?
        <RaiseHand {...this.props} /> :
        null
        }
        {this.props.shareThumbsCheckResults ? renderCorrectGraphType(this.props) :
        null}
     </div>
   );
 }
});

function mapStateToProps(state) {
 return {
   voting: state.get('voting'),
   upCount: state.getIn(['tally', 'thumbsUp']),
   downCount: state.getIn(['tally', 'thumbsDown']),
   aCount: state.getIn(['tally', 'a']),
   bCount: state.getIn(['tally', 'b']),
   cCount: state.getIn(['tally', 'c']),
   dCount: state.getIn(['tally', 'd']),
   eCount: state.getIn(['tally', 'e']),
   haveVoted: state.getIn(['tally', 'haveVoted']),
   handRaised: state.get('handRaised'),
   id: state.get('id'),
   name: state.get('name'),
   questions: state.get('questions'),
   shareThumbsCheckResults: state.get('shareThumbsCheckResults'),
   handFirstRaised: state.get('handFirstRaised'),
   questionType: state.get('questionType')
 };
}

export const StudentContainer = connect(mapStateToProps,actionCreators)(Student);
