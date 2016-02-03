import React from 'react';
import {connect} from 'react-redux';
import {StudentContainer} from './student/StudentMain';
import {Educator as EducatorContainer} from './educator/EducatorMain';
import Navbar from './educator/NavBarEducator';
import * as actionCreators from '../action_creators';
import PrivateBrowsingPage from './PrivateBrowsingPage';
import RoleChoice from './RoleChoice';


export const Main = React.createClass({
  canWriteLocalStorage: function() {
    try {
      localStorage.setItem('a', 'a');
      localStorage.removeItem('a');
      return true;
    } catch (exception) {
      return false;
    }
  },
 /*** NEED TO REFACTOR LOCAL STORAGE ITEMS ***/
  render: function() {
    if (this.canWriteLocalStorage()) {
      if (this.props.userType === 'student') {
        return (<StudentContainer
                  userType={this.props.userType}
                  currentRoom={this.props.currentRoom}
                  takingQuestions={this.props.takingQuestions}
                  numUsers={this.props.numUsers} />)
      } else if (this.props.userType === 'educator') {
        return <EducatorContainer {...this.props} />
      } else {
        return (
          <div>
              <div className="jumbotron center-text">
                <h1>Hello!</h1>
                <p>Welcome to Thumbcheck</p>
                <RoleChoice {...this.props} />
                </div>
          </div>
        );
      }
    } else {
      return <PrivateBrowsingPage />;
    }
  }
});

function mapStateToProps2(state) {
 return {
   userType: state.get('userType'),
   currentRoom : state.get('currentRoom'),
   voting: state.get('voting'),
   upCount: state.getIn(['tally', 'thumbsUp']),
   downCount: state.getIn(['tally', 'thumbsDown']),
   aCount: state.getIn(['tally', 'a']),
   bCount: state.getIn(['tally', 'b']),
   cCount: state.getIn(['tally', 'c']),
   openResponseAnswers: state.getIn(['tally', 'answers']),
   takingQuestions: state.get('takingQuestions'),
   questions: state.get('questions'),
   choice: state.get('choice'),
   roomName: state.get('roomName'),
   showgraph: state.get('showgraph'),
   errMessage: state.get('errMessage'),
   numUsers: state.get('numUsers'),
   questionType: state.get('questionType'),
   tally: state.get('tally')
 }
}

export const MainLandingContainer = connect(mapStateToProps2, actionCreators)(Main);
