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
    const inputValue = "/"+this.studentInput.value;
    window.location.assign(inputValue);

  },

  handleTeacherSubmit: function (e) {
    e.preventDefault();
    const inputValue = "/"+this.teacherInput.value+"?type=host";
    window.location.assign(inputValue);
  },

  render: function() {
    return (
      <div>
        {!this.props.choice ?
          <div>
            <p>Enter roomname <input ref={(ref) => this.studentInput = ref} /> <a className="btn btn-primary btn-md" role="button" onClick={this.handleStudentSubmit} >Join</a></p>
            <a className="btn btn-warning btn-md" role="button" onClick={this.chooseTeacher} >Teacher</a>
          </div>
          :
            <div>
              <p>Create custom room <input ref={(ref) => this.teacherInput = ref} /> <a className="btn btn-primary btn-md" role="button" onClick={this.handleTeacherSubmit}  >Create</a></p>
              <p><a className="btn btn-success btn-lg" href="/room" role="button">Generate Random Roomname</a></p>
              <a className="btn btn-warning btn-md" role="button" onClick={this.chooseStudent} >Student</a>
            </div>
        }
      </div>
    )
  }
});