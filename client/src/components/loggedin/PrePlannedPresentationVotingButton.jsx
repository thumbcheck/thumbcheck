import React from 'react';
import {List,Map} from 'immutable';

export default React.createClass({
  sendCheckin: function() {
    let questionType = this.props.currentPresentation.getIn(['currentQuestion', 'questionType']);
    questionType = (questionType === 'Thumbs Check') ? 'thumbs' : 'open';
    this.props.startVote(questionType);
  },

  sendCheckin3: function() {
    this.props.startVote('multipleChoice3');
  },

  sendCheckin4: function() {
    this.props.startVote('multipleChoice4');
  },

  sendCheckin5: function() {
    this.props.startVote('multipleChoice5');
  },
  renderPreplannedPresentationButton: function() {
    let questionType = this.props.currentPresentation.getIn(['currentQuestion', 'questionType']);
    let color = 'orange';
    let text = '';
    if (questionType === 'Thumbs Check') {
      color = 'orange', text = 'Thumbcheck';
    } else if (questionType === 'Open Response') {
      color='blue', text="Open Response";
    } else {
      color='green';
      let answer = this.props.currentPresentation.getIn(['currentQuestion', 'questionChoices']);
      let answerLength = answer ? answer.size : null;
      let checkInFunction;
      if (answerLength === 3) {
        checkInFunction = 'sendCheckin3'
      } else if (answerLength === 4) {
        checkInFunction = 'sendCheckin4'
      } else if (answerLength === 5) {
        checkInFunction = 'sendCheckin5'
      }

      return (
        <button value="multipleChoice3" type='button' className="push-top btn green request-btn white-text thumb-check-start" onClick={this[checkInFunction]}>
          Mutiple Choice
        </button>
      )
    }

    const classNames = "btn " + color + " push-top request-btn white-text thumb-check-start";

    return <button type='button' className={classNames} onClick={this.sendCheckin}>
            {text}
            </button>
  },
  render: function() {
    return (
      <div>
        {this.props.currentPresentation ? this.renderPreplannedPresentationButton() : null}
      </div>
    );
  }
});
