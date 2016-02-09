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
    let currentPresentationQuestionData = this.props.currentPresentation.toJS().questionChoice;
    console.log(currentPresentationQuestionData, 'currentpresentationdata')
    if(currentPresentationQuestionData) {
      return currentPresentationQuestionData.map(function(questionData) {
        return <QuestionListItem title={questionData.prompt} />
      });
    } else {
      return null;
    }
  },
  componentDidMount: function() {
    let presentationID = this.props.currentPresentationID;
    this.props.getPresentationData(presentationID);
  },
  render: function() {
    console.log('editpresentationprops', this.props)
    if (this.props.creatingQuestion) {
      console.log(this.props)
      return <CreateEditQuestions {...this.props} />
    } else {
      return (
        <div>
          {this.props.currentPresentation.toJS().presentation.title ? this.renderTitle() : <AddPresentationNameForm {...this.props} />}
          <h2>Presentation Question List</h2>
          {this.props.currentPresentation ? this.showPresentationQuestions() : null}
          <button onClick={this.props.createQuestion}>Add A New Question</button>
          <button onClick={this.props.createOrEditPresentation}>Finish</button>
        </div>
      )
    }
  }
});
