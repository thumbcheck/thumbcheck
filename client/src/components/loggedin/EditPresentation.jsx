import React from 'react';
import QuestionListItem from './QuestionListItem';
export default React.createClass({
  renderTitle: function() {
    // let currentPresentation = this.props.currentPresentation;
    let currentPresentation = {title: 'GeorgeWashington'};

    if (currentPresentation.title) {
      return <div>{currentPresentation.title}</div>;
    } else {
      return (<div>Add Your Title Here!</div>);
    }
  },
  showPresentationQuestions: function() {
    // let currentPresentationQuestionData = this.props.currentPresentationQuestionData;
    let currentPresentationQuestionData = [{title: 'When was he born?'}, {title: 'Favorite Color?'}];
    if(currentPresentationQuestionData) {
      return currentPresentationQuestionData.map(function(questionData) {
        return <QuestionListItem title={questionData.title} />
      });
    } else {
      return null;
    }
  },
  render: function() {
    return (
      <div>
        {this.renderTitle()}
        {this.showPresentationQuestions()}
      </div>
    );
  }
});