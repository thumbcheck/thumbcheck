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
import StudentQuestionInformation from '../loggedin/StudentQuestionInformation';
import {toJS, fromJS} from 'immutable';

export const Student = React.createClass({
 renderProperElement: function() {
   if(!this.props.voting) {
    return <Wait sharingAllThumbsCheckResults={this.props.sharingAllThumbsCheckResults}
                 shareThumbsCheckResults={this.props.shareThumbsCheckResults} />;
     // if(this.props.voting === false) {
     //   return <Wait/>;
     // } else {
     //   return <Wait />;
     // }
   } else if (checkHasVoted(this.props.haveVoted, window.localStorage.getItem('participantID'))) {
     return <WaitAnswered sharingAllThumbsCheckResults={this.props.sharingAllThumbsCheckResults}
                          shareThumbsCheckResults={this.props.shareThumbsCheckResults} />;
   } else {
     return <StudentAnswering ref="answer" {...this.props} />;
   }
 },
  renderPreplannedPresentationHeader: function() {
    console.log('preplanned', this.props.preplannedPresentation);
    if(this.props.preplannedPresentation && (this.props.shareThumbsCheckResults || this.props.sharingAllThumbsCheckResults)) {
      return <StudentQuestionInformation {...this.props} />
    } else {
      return null;
    }
 },
  renderCorrectGraphType: function() {
    return this.props.shareThumbsCheckResults || this.props.sharingAllThumbsCheckResults ? renderCorrectGraphType(this.props) : null;
  },
 render: function() {
   console.log('on student main', this.props);
   return (
     <div className="student-container center-text">
         <h4 className="in-room-text">You are in room: <strong>{this.props.currentRoom}</strong></h4>         
         {(this.props.takingQuestions && this.props.takingQuestions.toJS().allowQuestions) ?
           <RaiseHand handRaised={this.props.handRaised}
                      id={this.props.id}
                      addQuestion={this.props.addQuestion}
                      name={this.props.name}
                      toggleHandRaise={this.props.toggleHandRaise}
                      questions={this.props.questions}
                      addStudentIdentity={this.props.addStudentIdentity} /> :
           null}
         <h4 className="in-room-text"><strong>{this.props.numUsers}</strong> device(s) currently in this room</h4>         
         <div className="student-content">
           {this.renderProperElement()}
         </div>
         
          {this.renderPreplannedPresentationHeader()}
          {this.renderCorrectGraphType()}
     </div>
   );
 }
});

