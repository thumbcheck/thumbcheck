import React from 'react';
import {StudentContainer} from '../student/StudentMain';
import {EducatorContainer} from './EducatorMain';


export default React.createClass({

  getInitialState: function() {
    return {
      userType: window.localStorage.getItem('userType'),
      roomNumber: window.localStorage.getItem('room')
    }

  },

  render: function() {
    if (this.state.userType === 'student') {
      return <StudentContainer room={this.state.roomNumber} />
    } else if (this.state.userType === 'educator') {
      return <EducatorContainer room={this.state.roomNumber} />
    } else {
      return (
      	<div className="jumbotron">
  			  <h1>Hello, world!</h1>
          <h2>{this.state.userType}</h2>
  			  <p>Welcome to whatever thisThisIsCalled.com! We are glad youre here.</p>
  			  <p><a className="btn btn-success btn-lg" href="/createRoom" role="button">Get started</a></p>
  			  <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
  			</div>
      );
    }

  }
});
