import React from 'react';
import QuestionListItem from './QuestionListItem';
import AddPresentationNameForm from './AddPresentationNameForm';
import {toJS} from 'immutable';
import CreateEditQuestions from './CreateEditQuestions';
import _ from 'underscore';
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
    let deleteQuestion = this.props.deleteQuestion; 
    let createQuestion=this.props.createQuestion;
    let currentPresentationID = this.props.currentPresentationID;
    let currentPresentationQuestionData = this.props.currentPresentation.toJS().questionChoice;    
    if(currentPresentationQuestionData) {    
      let sortedQuestionData = _.sortBy(currentPresentationQuestionData, (question) => {
        return question.id;
      })
      return sortedQuestionData.map((questionData) => {
        return <QuestionListItem key={questionData.id}
                                 title={questionData.prompt} 
                                 id={questionData.id} 
                                 deleteQuestion={deleteQuestion} 
                                 createQuestion={createQuestion} 
                                 dataForQuestion={questionData}
                                 currentPresentationID={currentPresentationID}/>
      });
    } else {
      return null;
    }
  },
  componentDidMount: function() {
    let presentationID = this.props.currentPresentationID;
    if(presentationID !== null || presentationID !== undefined) {
      this.props.getPresentationData(presentationID);
    }
  },
  renderQuestionView: function() { 
    return (
      <div>
        {this.showPresentationQuestions()}
        <button className="btn grey white-text" onClick={this.props.createQuestion}>Add Question</button>
        <div>
          <button className="btn blue white-text" onClick={this.props.createOrEditPresentation}>Submit</button>
        </div>
      </div>
    )
  },
  render: function() {
    if (this.props.creatingQuestion) {
      return <CreateEditQuestions {...this.props} />
    } else {
      return (
        <div>
          {this.props.currentPresentation ? this.renderTitle() : <AddPresentationNameForm {...this.props} />}
          {this.props.currentPresentation ? this.renderQuestionView() : null}
        </div>
      )
    }
  }
});
