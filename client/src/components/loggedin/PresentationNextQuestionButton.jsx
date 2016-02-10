import React from 'react';
import {Map} from 'immutable';
// must implement this.props.nextQuestion

export default React.createClass({
  renderButton: function() {
    let questionIndex = this.props.currentPresentation.get('currentQuestionIndex');
    let questionsLength = this.props.currentPresentation.get('questionChoice').size;
    if (questionIndex < questionsLength - 1) {
      return (
        <div>
          <button type = 'button'
                  className = "btn grey white-text"
                  onClick = {this.props.moveToNextQuestion}>
                  Next Question
          </button>
        </div>
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
