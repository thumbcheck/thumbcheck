import React from 'react';
import {List,Map} from 'immutable';
import ResultsDisplay from '../educator/ResultsDisplay';

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
  showQuestionChoices: function() {
    let questionChoices = this.props.currentPresentation.getIn(['currentQuestion','questionChoices']);
    if (questionChoices) {
      questionChoices = questionChoices.toJS();
      return questionChoices.map((choice) => {
        return <div>{choice[0]}: {choice[1]}</div>
      });      
    }
  },
  renderQuestionHeader: function() {
    return (
      <div>
        <h1>Presentation: {this.props.currentPresentation.getIn(['presentation','title'])}</h1>
        <h2>Question: {this.props.currentPresentation.getIn(['currentQuestion', 'prompt'])}</h2>
      </div>
    );
  },
  renderPreplannedPresentationButton: function() {
    let questionType = this.props.currentPresentation.getIn(['currentQuestion', 'questionType']);
    let color = 'orange';
    let text = '';
    if (questionType === 'Thumbs Check') {
      color = 'orange', text = 'Thumbscheck';
    } else if (questionType === 'Open Response') {
      color='blue', text="Open Response";
    } else {
      let answer = this.props.currentPresentation.getIn(['currentQuestion', 'questionChoices']);
      let answerLength = answer.size;
      let checkInFunction;
      if (answerLength === 3) {
        checkInFunction = 'sendCheckin3'
      } else if (answerLength === 4) {
        checkInFunction = 'sendCheckin4'
      } else if (answerLength === 5) {
        checkInFunction = 'sendCheckin5'
      }

      return (
        <button value="multipleChoice3" type='button' className="btn orange request-btn white-text thumb-check-start" onClick={this[checkInFunction]}>
          Mutiple Choice
        </button>
      )
    }

    const classNames = "btn " + color + " request-btn white-text thumb-check-start";

    return <button type='button' className={classNames} onClick={this.sendCheckin}>
            {text}
            </button>
  },
  componentDidMount: function() {
    if (!this.props.currentPresentation) {
      this.props.getPresentationData(this.props.currentPresentationID);
    }
  },
  render: function() {
    return (
      <div>
        {this.props.currentPresentation ? this.renderPreplannedPresentationButton(): null}
        {this.props.currentPresentation ? this.renderQuestionHeader() : null}
        {this.props.currentPresentation ? this.showQuestionChoices() : null}
      </div>
    );
  }
});
