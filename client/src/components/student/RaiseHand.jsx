import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  toggleHandRaise: function() {
    // if props.id is defined, send in a question
    if (this.props.id) {
      // last argument is whether there's already a question from that student submitted
      if (this.props.handRaised === true) this.props.addQuestion(this.props.id, this.props.name, true);
      else this.props.addQuestion(this.props.id, this.props.name, false);
    }
    this.props.toggleHandRaise();
  },

  nameInQueue: function() {
    if (this.props.questions === undefined) {return false}
    let found = false;
    let questions = this.props.questions.toJS();
    for (var p = 0; p < questions.length; p++) {
      if (questions[p][0] === this.props.id) {
        found = true;
      }
    }
    return found;
  },

  confirmHandRaise: function(e) {
    // set student id and name on client state
    const studentId = Math.floor(Math.random() * (10000 - 1) * 1);
    const inputValue = this.studentNameInput.value;
    this.props.addStudentIdentity(studentId, inputValue);
    this.props.addQuestion(studentId, inputValue);
  },

  checkHandRaised: function(){
    // if hand raised is true and his name is defined, but name is not in questions queue, toggle it back to false
    if (this.props.handRaised && !this.nameInQueue() && this.props.id) {
      this.toggleHandRaise();
    }
  },

  handleEnter: function (e){
    if (e.keyCode == 13){
      this.confirmHandRaise(e);
    }
  },

  render: function() {
    this.checkHandRaised();
    return (
      <div className="raise-hand-container">

        {this.nameInQueue() ?
            <img onClick={this.toggleHandRaise} data-toggle="tooltip" data-placement="right" title="Lower your hand" className="student-hand-icon" src="/images/icons/student_raise_hand2.png" />
          : <button className="btn blue white-text raise-hand-button"
                onClick={this.toggleHandRaise} >
                Raise Hand
          </button> }


          {this.props.handRaised ?
            this.props.id === undefined ?
              <div>
                <input type="text" placeholder="Enter your name" ref={(ref) => this.studentNameInput = ref}  onKeyDown ={this.handleEnter} />
                <button onClick={this.confirmHandRaise} className="btn btn-success">Confirm hand raise</button>
              </div>
              : null
            : null
          }
      </div>
    );
  }
})


