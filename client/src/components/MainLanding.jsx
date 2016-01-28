import React from 'react';
import {StudentContainer} from './student/StudentMain';
import {EducatorContainer} from './educator/EducatorMain';


export default React.createClass({
  /*** NEED TO REFACTOR LOCAL STORAGE ITEMS ***/
  render: function() {
    if (window.localStorage.getItem('userType') === 'student') {
      return <StudentContainer room={window.localStorage.getItem('room')} />
    } else if (window.localStorage.getItem('userType') === 'educator') {
      return <EducatorContainer room={window.localStorage.getItem('room')} />
    } else {
      return (
      	<div className="jumbotron">
  			  <h1>Hello, world!</h1>
  			  <p>Welcome to whatever thisThisIsCalled.com! We are glad youre here.</p>
  			  <p><a className="btn btn-success btn-lg" href="/createRoom" role="button">Get started</a></p>
  			  <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
  			</div>
      );
    }

  }
});
