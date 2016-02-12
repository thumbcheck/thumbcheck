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
      <div className="col-xs-offset-2 col-xs-8 col-md-4 col-md-offset-4">
        <div className='table-list-header text-center'>
          <span>{currentPresentationTitle}</span>
        </div>
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
          <div className='col-xs-2 col-md-4 table-list-create-container' onClick = { this.props.createQuestion }>
            <div className='table-list-add table-list-text table-question-list-add'>
              <span className='hidden-small-screen'>Add Question</span>
              <img className="table-list-addbutton" src="/images/icons/addpresentation.png" />  
            </div>
          </div>
          <div className='row'>
            <div className='col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1'>
              <div className="panel panel-default table-responsive table-list-table-container">
                <table className="table table-hover table-bordered content-table very-light-grey">
                  <tbody>
                    {this.showPresentationQuestions()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        <div className='table-question-list-goback' onClick={ this.props.createOrEditPresentation }>
          {/*<button className="btn blue white-text" onClick={this.props.createOrEditPresentation}>Submit</button>*/}
          <span className='table-list-text table-list-goback-text'>Go Back</span>
          <img className="next-icon align-up" src="/images/icons/cancel_icon1.png"/>
        </div>
      </div>

    )
  },
  render: function() {
    if (this.props.creatingQuestion) {
      return <CreateEditQuestions {...this.props} />
    } else {
      return (
      <div className='table-list-container'>
        <div className='row'>
          {this.props.currentPresentation ? this.renderTitle() : <AddPresentationNameForm {...this.props} />}
          {this.props.currentPresentation ? this.renderQuestionView() : null}
        </div>
      </div>
      )
    }
  }
});


