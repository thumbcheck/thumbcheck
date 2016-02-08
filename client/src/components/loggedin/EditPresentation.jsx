import React from 'react';
import QuestionListItem from './QuestionListItem';
import AddPresentationNameForm from './AddPresentationNameForm';
import {toJS} from 'immutable';
import CreateEditQuestions from './CreateEditQuestions';
export default React.createClass({
  renderTitle: function() {
    let currentPresentationTitle = this.props.currentPresentation.toJS().presentation.title || null;
    return (
      <div>
        <h2>Presentation Title: {currentPresentationTitle} </h2>
      </div>
    )
  },
  showPresentationQuestions: function() {
    let currentPresentationQuestionData = this.props.currentPresentation.toJS().questions;
    if(currentPresentationQuestionData) {
      return currentPresentationQuestionData.map(function(questionData) {
        return <QuestionListItem title={questionData.prompt} />
      });
    } else {
      return null;
    }
  },
  render: function() {
    if (this.props.creatingQuestion) {
      console.log(this.props)
      return <CreateEditQuestions {...this.props} />
    } else {
      return (
        <div>
          {this.props.currentPresentation.toJS().presentation.title ? this.renderTitle() : <AddPresentationNameForm {...this.props} />}
          <h2>Presentation Question List</h2>
          {this.showPresentationQuestions()}
          <button onClick={this.props.createQuestion}>Add A New Question</button>
          <button onClick={this.props.createOrEditPresentation}>Finish</button>
        </div>
      )
    }
  }
});
