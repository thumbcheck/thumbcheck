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
 componentDidMount: function() {
    if(this.props.currentRoom !== '') {
      this.props.stopVote();
    }
 },
 showQuestions: function() {
  let questions = this.props.questions.toJS();
  let allNames = []
  return questions.map(function(tuple, index) {
    return <div>{tuple[1]}</div>
  });
 },
 sharingAllThumbsCheckResults: function() {
   this.props.toggleSharingAllThumbsCheckResults();
 },
 render: function() {         
   console.log('on educator main', this.props); 
   return (
     <div>
       <Navbar {...this.props}/>          
        <div className="educator-container">
          <div className="pull-right big-text-vh push-right center-text">Share this URL: {window.location.href.split('?')[0]}</div>
          <div className="push-left big-text-vh">
            <span>Room Name: <strong><span className="bold-text"> {this.props.currentRoom}</span></strong></span><br/>           
            <span><span className="bold-text"> { this.props.numUsers }</span> { this.props.numUsers === 1 ? "device" : "devices"} currently in this room</span>          
          </div>
          <div className="presentation-container center-text">                                    
            {this.props.voting ?
              <ResultsDisplay ref="resultsDisplay" {...this.props} /> :
              <EducatorRequestCheckin {...this.props} />
            }
            
          </div>
       </div>
     </div>
   )
 }
});
