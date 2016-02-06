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
    return <Wait />
     // if(this.props.voting === false) {
     //   return <Wait/>;
     // } else {
     //   return <Wait />;
     // }
   } else if (checkHasVoted(this.props.haveVoted, window.localStorage.getItem('participantID'))) {
     return <WaitAnswered />;
   } else {
     return <StudentAnswering ref="answer" {...this.props} />;
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
         {(this.props.takingQuestions && this.props.takingQuestions.toJS().allowQuestions) ?
           <RaiseHand handRaised={this.props.handRaised}
                      id={this.props.id}
                      addQuestion={this.props.addQuestion}
                      name={this.props.name}
                      toggleHandRaise={this.props.toggleHandRaise}
                      questions={this.props.questions}
                      addStudentIdentity={this.props.addStudentIdentity} /> :
           null}
         {this.props.shareThumbsCheckResults ?
           renderCorrectGraphType(this.props) :
           null}
     </div>
   );
 }
});

