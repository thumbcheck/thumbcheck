import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  
  toggleHandRaise: function() {        
    // if props.id is defined, send in a question    
    if (this.props.id) {
      // last argument is whether there's already a question from that student submitted
      if (this.props.handRaised === true) this.props.addQuestion(this.props.id, this.props.name, true);      
      else this.props.addQuestion(this.props.id, this.props.name, false);      
    } else {                  
    }
    this.props.toggleHandRaise();
  },
  handleChange: function(event) {    
    this.enteredName = event.target.value;
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
  confirmHandRaise: function() {
    // set student id and name on client state
    const studentId = Math.floor(Math.random() * (1000 - 1) * 1);    
    this.props.addStudentIdentity(studentId, this.enteredName);    
    // send in the question     
    this.props.addQuestion(studentId, this.enteredName); 
    this.enteredName =  '';    
  },
  render: function() {        
    return (
      <div>
        <button type='button btn-info' type='button'
                onClick={this.toggleHandRaise} >
                {this.nameInQueue() ? 'Lower Hand' : 'Raise Hand'}
        </button>
          {this.props.handRaised ?            
            this.props.id === undefined ?
              <div>
                <input type="text" placeholder="Your name" value={this.enteredName} onChange={this.handleChange}/>
                <button onClick={this.confirmHandRaise} className="btn btn-warning">Confirm hand raise</button> :
              </div> 
              : null
            : null
          }
      </div>
    );
  }
})

    
