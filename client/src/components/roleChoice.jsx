import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  chooseTeacher: function () {
    this.props.chooseRole('teacher');
  },

  chooseStudent: function () {
    this.props.chooseRole('student');
  },

  onChange: function (e) {
    this.props.joinRoom(e.target.value);
    //console.log(e.target.value);
    console.log(this.props.roomName);
  },

  render: function() {
    //console.log(this.props.choice);
    if(!this.props.choice){
      return (
        <p><a className="btn btn-primary btn-md" role="button" onClick={this.chooseTeacher} >Teacher</a>
        <a className="btn btn-primary btn-md" role="button" onClick={this.chooseStudent} >Student</a></p>
      )
    } else if(this.props.choice === 'teacher'){
      return (
        <div>
          <p>Enter roomname here <input onChange={this.onChange} /> <a className="btn btn-primary btn-md" role="button" href={"/"+this.props.roomName+"?type=host"} >Create</a></p>
          <p><a className="btn btn-success btn-lg" href="/room" role="button">Generate Random Roomname</a></p>
          <p>Student? Click here to join a room instead. <a className="btn btn-primary btn-md" role="button" onClick={this.chooseStudent} >Student</a></p>
        </div>
      )
    } else {
      return (
        <div>
          <p>Enter roomname here <input onChange={this.onChange} /> <a className="btn btn-primary btn-md" role="button" href={"/"+this.props.roomName} >Join</a></p>
          <p>Teacher? Click here to create a room instead. <a className="btn btn-primary btn-md" role="button" onClick={this.chooseTeacher} >Teacher</a></p>
        </div>
      )
    }
  }
});