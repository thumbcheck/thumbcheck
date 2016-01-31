import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {StudentContainer} from './student/StudentMain';
import {Educator as EducatorContainer} from './educator/EducatorMain';
import Navbar from './educator/NavBarEducator';
import * as actionCreators from '../action_creators';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';
import EducatorOrStudent from './EducatorOrStudent';


export const Main = React.createClass({
 /*** NEED TO REFACTOR LOCAL STORAGE ITEMS ***/

 handleSubmit: function (e) {

  console.log(this.myTextInput.value);
  if(this.myTextInput){
    return this.myTextInput.value;
  } else {
    return 'myRoom'
  }
  //setRoom(this.myTextInput.value);
  //console.log(this.props.currentRoom);

 },

 render: function() {
   if (this.props.userType === 'student') {
     return <StudentContainer userType={this.props.userType} currentRoom={this.props.currentRoom} />
   } else if (this.props.userType === 'educator') {
     return <EducatorContainer {...this.props} />
   } else {
     return (
       <div>
           <div className="jumbotron center-text">
                 <h1>Hello, world!</h1>
                 <p>Welcome to whatever thisThisIsCalled.com! We are glad youre here.</p>
                 <EducatorOrStudent {...this.props} />
               </div>
       </div>
     );
   }

 }
});

function mapStateToProps2(state) {
 return {
   choice: state.get('choice'),
   roomName: state.get('roomName'),
   userType: state.get('userType'),
   currentRoom : state.get('currentRoom'),
   voting: state.get('voting'),
   upCount: state.getIn(['tally', 'thumbsUp']),
   downCount: state.getIn(['tally', 'thumbsDown']),
   takingQuestions: state.get('takingQuestions')
 }
}

export const MainLandingContainer = connect(mapStateToProps2, actionCreators)(Main);
