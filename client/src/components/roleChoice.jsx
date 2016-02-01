import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  chooseTeacher: function () {
    this.props.chooseRole('teacher');
  },

  chooseStudent: function () {
    this.props.chooseRole('');
  },

  onChange: function (e) {
    this.props.joinRoom(e.target.value);
  },

  render: function() {
    //console.log(this.props.choice);
    //let teacher = false;
    //console.log(teacher);
    return (
      <div>
        {!this.props.choice ?
          <div>
            <p>Enter roomname <input onChange={this.onChange} /> <a className="btn btn-primary btn-md" role="button" href={"/"+this.props.roomName} >Join</a></p>
            <a className="btn btn-warning btn-md" role="button" onClick={this.chooseTeacher} >Teacher</a>
          </div>
          :
            <div>
              <p>Create custom room <input onChange={this.onChange} /> <a className="btn btn-primary btn-md" role="button" href={"/"+this.props.roomName+"?type=host"} >Create</a></p>
              <p><a className="btn btn-success btn-lg" href="/room" role="button">Generate Random Roomname</a></p>
              <a className="btn btn-warning btn-md" role="button" onClick={this.chooseStudent} >Student</a>
            </div>
        }
      </div>
    )
  }
});