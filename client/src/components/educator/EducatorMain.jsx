import React from 'react';
import {connect} from 'react-redux';
import EducatorRequestCheckin from './EducatorRequestCheckin';
import ResultsDisplay from './ResultsDisplay';
import io from 'socket.io-client';
import Navbar from './NavBarEducator';
import QuestionButton from './QuestionButton';
import * as actionCreators from '../../action_creators';
import _ from 'underscore';
import {toJS} from 'immutable';

export const Educator = React.createClass({
 componentWillMount: function() {
   return this.props.showgraph === "1" ? "1" : "0";  
 },
 componentDidMount: function() {
    if(this.props.currentRoom !== '') {
      this.props.stopVote();
    }
 },
 showQuestions: function() {  
  let questions = this.props.questions.toJS();
  console.log('qeustions', questions);
  let allNames = []
  return questions.map(function(tuple, index) {
    return <div>{tuple[1]}</div>
  });    
 },
 render: function() {    
  console.log('on educator main', this.props);
   return (
     <div>
       <Navbar />          
        <div className="educator-container">
          <div className="center-text">
            <h4>Share this URL with your students: {window.location.href.split('?')[0]}
            <br />Or have them enter this room name: {this.props.currentRoom}
            </h4>
            {this.props.voting ?
              <ResultsDisplay ref="resultsDisplay" {...this.props} /> :
              <EducatorRequestCheckin {...this.props} />
            }
          </div>
          <div className="questions-queue">{this.props.questions !== undefined ? this.showQuestions() : null}</div>
       </div>
     </div>
   )
 }
});        

// functigion mapStateToProps(state) {
//  return {
//    voting: state.get('voting'),
//    upCount: state.getIn(['tally', 'thumbsUp']),
//    downCount: state.getIn(['tally', 'thumbsDown'])
//  };
// }

// const EducatorContainer = Educator;
// export const EducatorContainer;
// export const EducatorContainer = connect(mapStateToProps,actionCreators)(Educator);
