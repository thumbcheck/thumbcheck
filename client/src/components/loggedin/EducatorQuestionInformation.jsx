import React from 'react';
import {List,Map} from 'immutable';
import ResultsDisplay from '../educator/ResultsDisplay';
import PreplannedPresentationVotingButton from './PreplannedPresentationVotingButton';

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
      return questionChoices.map((choice, index) => {
        return <div key={index}>{ choice[0].toUpperCase() }: {choice[1]}</div>
      });      
    }
  },
  renderQuestionHeader: function() {
    return (
      <div>
        <span className="pull-left big-text-vh dont-show-small-screen-800">{this.props.currentPresentation.getIn(['presentation','title'])}</span>
        <span className="bigger-text">{this.props.currentPresentation.getIn(['currentQuestion', 'prompt'])}</span>
      </div>
    );
  },
  renderPreplannedPresentationButton: function() {
    let questionType = this.props.currentPresentation.getIn(['currentQuestion', 'questionType']);
    let color = 'green';
    let text = '';
    if (questionType === 'Thumbs Check') {
      color = 'orange', text = 'Thumbscheck';
    } else if (questionType === 'Open Response') {
      color='blue', text="Open Response";
    } else {
      color = 'green';
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
        <button value="multipleChoice3" type='button' className="btn green request-btn white-text thumb-check-start" onClick={this[checkInFunction]}>
          Multiple Choice
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
        {this.props.currentPresentation ? this.renderQuestionHeader() : null}
        {this.props.currentPresentation ? this.showQuestionChoices() : null}
      </div>
    );
  }
});
