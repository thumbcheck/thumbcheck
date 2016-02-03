import React from 'react';
import {connect} from 'react-redux';
import Wait from './StudentWaiting';
import WaitAnswered from './StudentAnsweredWaiting';
import io from 'socket.io-client';
import StudentAnswering from './StudentAnswering';
import * as actionCreators from '../../action_creators';
import RaiseHand from './RaiseHand';
import BarGraph from '../educator/EducatorBarGraph';
import checkHasVoted from '../../helpers/checkHasVoted';
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
     return <StudentAnswering ref="answer" {...this.props} />;
   }
 },
 render: function() {
   console.log('on student main', this.props);
    return (
      <div className="student-container center-text">
        <h4>Room name: {this.props.currentRoom}</h4>
        <div className="student-content">
          {this.renderProperElement()}  
        </div>
        {(this.props.takingQuestions && this.props.takingQuestions._root.entries[0][1]) ?
        <RaiseHand {...this.props} /> :
        null
        }
        <BarGraph ref="resultsDisplay" lastOrCurrent="current-result-graph" {...this.props}/>
     </div>
   );
 }
});

function mapStateToProps(state) {
 return {
   voting: state.get('voting'),
   upCount: state.getIn(['tally', 'thumbsUp']),
   downCount: state.getIn(['tally', 'thumbsDown']),
   haveVoted: state.getIn(['tally', 'haveVoted']),
   handRaised: state.get('handRaised'),
   id: state.get('id'),
   name: state.get('name'),
   questions: state.get('questions'),   
 };
}

export const StudentContainer = connect(mapStateToProps,actionCreators)(Student);
