import React from 'react';
import {toJS} from 'immutable';
import LoginPage from './loggedin/LoginPage';
import SignupPage from './loggedin/SignupPage';

export default React.createClass({
  chooseTeacher: function () {
    this.props.chooseRole('teacher');
    this.props.setError('');
  },

  chooseStudent: function () {
    this.props.chooseRole('');
    this.props.setError('');
  },

  chooseSignup: function () {
    this.props.chooseRole('signup');
    this.props.setError('');
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
        <div className="subtitle">
          <div className="Grid">
            <div className="Grid-cell main-landing-left">
            <p>No account? No problem!</p>
              <p><a className="btn btn-primary btn-lg" onClick={this.handleCreateRoom} role="button">Start Presentation Now</a></p>
            </div>
            <div className="Grid-cell main-landing-right">
              <LoginPage isMobile={false} {...this.props} />
              <p><a onClick={this.chooseSignup}>Don&#39;t have an account yet? </a></p>
            </div>
          </div>
          <a className="btn btn-warning btn-lg" role="button" onClick={this.chooseStudent} >Join a presentation</a>
        </div>
        <div className="small-screen">
          <div className="Grid">
            <div className="Grid-cell main-landing-left">
              <p><a className="btn btn-primary btn-lg" onClick={this.handleCreateRoom} role="button">Start Presentation Now</a></p>
            </div>
            <div className="Grid-cell">
            <LoginPage chooseSignup={this.chooseSignup} isMobile={true} {...this.props} />
            </div>
          </div>
          <a className="btn btn-warning btn-md" role="button" onClick={this.chooseSignup} >Sign Up</a>
          <a className="btn btn-warning btn-md" role="button" onClick={this.chooseStudent} >Join a presentation</a>
        </div>
        </div>
      )
    } else if(this.props.choice === 'signup') {
      return (
        <div>
          <div className="subtitle">
            <div className="Grid">
              <div className="Grid-cell main-landing-left">
              <p>No account? No problem!</p>
                <p><a className="btn btn-primary btn-lg" onClick={this.handleCreateRoom} role="button">Start Presentation Now</a></p>
              </div>
              <div className="Grid-cell main-landing-right">
                <SignupPage chooseTeacher={this.chooseTeacher} isMobile={false} {...this.props} />
                <p><a onClick={this.chooseTeacher}>Already have an account?</a></p>
              </div>
            </div>
            <a className="btn btn-warning btn-lg" role="button" onClick={this.chooseStudent} >Join a presentation</a>
          </div>
          <div className="small-screen">
            <div className="Grid">
              <div className="Grid-cell main-landing-left">
                <p><a className="btn btn-primary btn-lg" onClick={this.handleCreateRoom} role="button">Start Presentation Now</a></p>
              </div>
              <div className="Grid-cell">
                <SignupPage chooseTeacher={this.chooseTeacher} isMobile={true} {...this.props} />
              </div>
            </div>
            <a className="btn btn-warning btn-md" role="button" onClick={this.chooseTeacher} >Log In</a>
            <a className="btn btn-warning btn-md" role="button" onClick={this.chooseStudent} >Join a presentation</a>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="main-landing-student-choice">
            <p>Join existing presentation: </p>
            <p><input className="input_width input-lg" ref={(ref) => this.studentInput = ref} onKeyDown ={this.handleEnter} /> <a className="btn btn-primary btn-lg" role="button" onClick={this.handleStudentSubmit} >Join</a></p>
            <p>{this.props.errMessage}</p>
          </div>
          <hr className="hr"/>
          <div className="main-landing-educator-choice">
            <p>Want to start a presentation?</p>
            <a className="btn btn-warning btn-lg" role="button" onClick={this.chooseTeacher} >Get Started</a>
          </div>
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
