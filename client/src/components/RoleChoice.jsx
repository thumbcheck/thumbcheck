import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  chooseTeacher: function () {
    this.props.chooseRole('teacher');
  },

  chooseStudent: function () {
    this.props.chooseRole('');
  },

  handleStudentSubmit: function (e) {
    e.preventDefault();
    const inputValue = this.studentInput.value.toLowerCase();
    const that = this;
    if (inputValue === 'room') {
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

  render: function() {          
    console.log('props on kaknding', this.props);
    return (
      <div>
        {!this.props.choice ?
          <div>            
            <p>Join existing room <input ref={(ref) => this.studentInput = ref} /> <a className="btn btn-primary btn-md" role="button" onClick={this.handleStudentSubmit} >Join</a></p>
            <p>{this.props.errMessage}</p>
            <a className="btn btn-warning btn-md" role="button" onClick={this.chooseTeacher} >I&#39;m an Educator</a>            
          </div>
          :
            <div>
              <p><a className="btn btn-primary btn-md" onClick={this.handleCreateRoom} role="button">Create a lecture room</a></p>
              <a className="btn btn-warning btn-md" role="button" onClick={this.chooseStudent} >I&#39;m a Student</a>
            </div>
        }
      </div>
    )
  }
});
