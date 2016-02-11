import React from 'react';
import {toJS} from 'immutable';
import LoginPage from './loggedin/LoginPage';
import SignupPage from './loggedin/SignupPage';

export default React.createClass({
  chooseTeacher: function () {
    this.props.chooseRole('teacher');
  },

  chooseStudent: function () {
    this.props.chooseRole('');
  },

  chooseSignup: function () {
    this.props.chooseRole('signup');
  },

  handleStudentSubmit: function (e) {
    e.preventDefault();
    const inputValue = this.studentInput.value.toLowerCase();
    const that = this;

    if (inputValue === 'room' || inputValue === 'login' ) {
      this.props.setError('Room not found. Please enter a valid.');
    } else if (!inputValue) {
      this.props.setError('Please enter a room name.');
    } else {
      $.ajax({
        type: 'POST',
        url: '/'+inputValue,
      })
      .success(function(data) {
        if (data) {
          window.location.assign(inputValue);
        } else {
          that.props.setError('Room not found. Please try again.');
        }
      });
    }
  },

  handleCreateRoom: function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/room',
    })
    .success(function(data) {
      window.location.assign(data);
    });
  },

  handleEnter: function (e){
    if (e.keyCode == 13){
      this.handleStudentSubmit(e);
    }
  },

  renderProperElement: function () {
    if(this.props.choice === 'teacher') {
      return (
        <div>
          <div className="Grid">
            <div className="Grid-cell mycontent-left">
            Don't want to sign up for an account? No problem!
              <p><a className="btn btn-primary btn-lg" onClick={this.handleCreateRoom} role="button">Start Presentation Now</a></p>
            </div>
            <div className="Grid-cell">
              <LoginPage {...this.props} />
              <p>Don&#39;t have an account yet? <a className="btn btn-primary btn-md" role="button" onClick={this.chooseSignup} >Sign Up</a></p>
            </div>
          </div>
          <a className="btn btn-warning btn-lg" role="button" onClick={this.chooseStudent} >Join a presentation</a>
        </div>
      )
    } else if(this.props.choice === 'signup') {
      return (
        <div>
          <div className="Grid">
            <div className="Grid-cell mycontent-left">
            Don't want to sign up for an account? No problem!
              <p><a className="btn btn-primary btn-lg" onClick={this.handleCreateRoom} role="button">Start Presentation Now</a></p>
            </div>
            <div className="Grid-cell">
              <SignupPage {...this.props} />
              <p>Already have an account? <a className="btn btn-primary btn-md" role="button" onClick={this.chooseTeacher} >Log In</a></p>
            </div>
          </div>
          <a className="btn btn-warning btn-lg" role="button" onClick={this.chooseStudent} >Join a presentation</a>
        </div>
      )
    } else {
      return (
        <div>
          <p>Enter room name to join existing presentation: </p>
          <p><input className="input_width input-lg" ref={(ref) => this.studentInput = ref} onKeyDown ={this.handleEnter} /> <a className="btn btn-primary btn-lg" role="button" onClick={this.handleStudentSubmit} >Join</a></p>
          <p>{this.props.errMessage}</p>
          <hr/>
          <p>Want to start a presentation?</p>
          <a className="btn btn-warning btn-lg" role="button" onClick={this.chooseTeacher} >Click to Begin</a>
        </div>
      )
    }
  },

  render: function() {
    return (
      <div>
        {this.renderProperElement()}
      </div>
    )
  }
});
