import React from 'react';
import QuestionListItem from './QuestionListItem';
import AddPresentationNameForm from './AddPresentationNameForm';
import {toJS} from 'immutable';
import CreateEditQuestions from './CreateEditQuestions';
export default React.createClass({
  renderTitle: function() {
    let currentPresentationTitle = this.props.currentPresentation.toJS().presentation.title || null;
    console.log('currentPresentationTitle in renderTitle', currentPresentationTitle)
    return (
      <div>
        <h2>Presentation Title: {currentPresentationTitle} </h2>
      </div>
    )
  },  
  showPresentationQuestions: function() {    
    let deleteQuestion = this.props.deleteQuestion, createQuestion=this.props.createQuestion;
    let currentPresentationQuestionData = this.props.currentPresentation.toJS().questionChoice;    
    if(currentPresentationQuestionData) {      
      return currentPresentationQuestionData.map(function(questionData) {
        return <QuestionListItem title={questionData.prompt} id={questionData.id} deleteQuestion={deleteQuestion} createQuestion={createQuestion} dataForQuestion={questionData}/>
      });
    } else {
      return null;
    }
  },
  componentDidMount: function() {
    let presentationID = this.props.currentPresentationID;
    console.log('mounting props')
    this.props.getPresentationData(presentationID);
  },
  renderQuestionView: function() {
    return (
      <div>
        <h2>Presentation Question List</h2> 
        {this.showPresentationQuestions()}
        <button onClick={this.props.createQuestion}>Add A New Question</button>
        <button onClick={this.props.createOrEditPresentation}>Finish</button>   
      </div>
    )
  },
  render: function() {
    console.log('editpresentationprops', this.props)
    if (this.props.creatingQuestion) {
      console.log(this.props)
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
