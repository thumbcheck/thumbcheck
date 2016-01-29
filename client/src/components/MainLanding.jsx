import React from 'react';
import {connect} from 'react-redux';
import {StudentContainer} from './student/StudentMain';
import {Educator as EducatorContainer} from './educator/EducatorMain';
import Navbar from './educator/NavBarEducator';
import * as actionCreators from '../action_creators';


export const Main = React.createClass({
 /*** NEED TO REFACTOR LOCAL STORAGE ITEMS ***/
 render: function() {
   console.log('state main', this.props);
   if (this.props.userType === 'student') {
     return <StudentContainer userType={this.props.userType} currentRoom={this.props.currentRoom} />
   } else if (this.props.userType === 'educator') {
     return <EducatorContainer {...this.props}  />
   } else {
     return (
       <div>           
           <div className="jumbotron center-text">
                 <h1>Hello, world!</h1>
                 <p>Welcome to whatever thisThisIsCalled.com! We are glad youre here.</p>
                 <p><a className="btn btn-success btn-lg" href="/createRoom" role="button">Get started</a></p>                  
               </div>
       </div>
     );
   }

 }
});

function mapStateToProps2(state) {    
 return {
   userType: state.get('userType'),
   currentRoom : state.get('currentRoom'),
   voting: state.get('voting'),
   upCount: state.getIn(['tally', 'thumbsUp']),
   downCount: state.getIn(['tally', 'thumbsDown'])
 }
}

export const MainLandingContainer = connect(mapStateToProps2, actionCreators)(Main);
