import React from 'react';
import {Map} from 'immutable';
// must implement this.props.nextQuestion

export default React.createClass({
  renderButton: function() {
    let questionIndex = this.props.currentPresentation.get('currentQuestionIndex');
    let questionsLength = this.props.currentPresentation.get('questionChoice').size;
    if (questionIndex < questionsLength - 1) {
      return (        
          <span className="next-button-container"              
                  onClick = {this.props.moveToNextQuestion}>
                  <span className="next-question-text dont-show-small-screen-800 big-text-vh">Next Question</span>
                  <img className="next-icon" src="/images/icons/next_icon.ico"/>
          </span>        
      )
    } else {
      return null;
    }
  },
  render: function() {
    return (
      <div>
        {this.props.currentPresentation ? this.renderButton() : null}
      </div>
    );
  }
});
