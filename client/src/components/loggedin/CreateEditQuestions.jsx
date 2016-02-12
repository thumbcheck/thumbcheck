import React from 'react';
import {toJS} from 'immutable';

// When user selects multiple choice, we could determine the number of responses based
// on the number that they fill in...

export default React.createClass({
  chooseThumbCheck: function () {
// fill this in
    this.props.selectTypeThumbCheck();    
  },
  chooseMultipleChoice: function() {
    this.props.selectTypeMultipleChoice();
  },
  chooseOpenResponse: function() {
// fill this in
    this.props.selectTypeOpenResponse();    
  },
  choose3choices: function() {
    this.props.toggle3choices();
  },
  choose4choices: function() {
    this.props.toggle4choices();
  },
  choose5choices: function() {
    this.props.toggle5choices();
  },
  handleQuestionPromptChange: function(e) {
    this.questionPrompt = e.target.value;    
  },
  handleQuestionSubmission: function() {
    if (this.questionPrompt !== '') {
      let questionData= {};
      questionData.prompt = this.questionPrompt;
      questionData.presentationID = this.props.currentPresentationID;
      let questionType;
      if (this.props.createQuestionTypeThumbCheck) {
        questionType = 'Thumbs Check';
      } else if (this.props.createQuestionTypeOpenResponse) {
        questionType = 'Open Response';
      } else {
        questionType = 'Multiple Choice'; 
      }

      questionData.questionType = questionType;

      questionData.questionAnswer = {a: null};
      if (this.props.createQuestionTypeMultipleChoice) {
        questionData.questionAnswer.a = this.multipleChoiceAValue;
        questionData.questionAnswer.b = this.multipleChoiceBValue;
        questionData.questionAnswer.c = this.multipleChoiceCValue;

        if(this.props.a4choice || this.props.a5choice) {
          questionData.questionAnswer.d = this.multipleChoiceDValue;
        }

        if(this.props.a5choice) {
          questionData.questionAnswer.e = this.multipleChoiceEValue;
        }
      }
      let editingId = false;
      let editingQuestionPresentationID;
      if (this.props.editingQuestionIdInfo[0] !== ".") {
        editingId = this.props.editingQuestionIdInfo.toJS().id;
        editingQuestionPresentationID = this.props.currentPresentationID;
      }        
      this.props.addPresentationQuestion(questionData, editingId, editingQuestionPresentationID);
      this.props.createQuestion();
    }
  },
  handleMultipleChoiceAChange: function(e) {
    this.multipleChoiceAValue = e.target.value;
  },
  handleMultipleChoiceBChange: function(e) {
    this.multipleChoiceBValue = e.target.value;
  },
  handleMultipleChoiceCChange: function(e) {
    this.multipleChoiceCValue = e.target.value;
  },
  handleMultipleChoiceDChange: function(e) {
    this.multipleChoiceDValue = e.target.value;
  },
  handleMultipleChoiceEChange: function(e) {
    this.multipleChoiceEValue = e.target.value;
  },
  componentWillMount: function() {
    // if it's a question being edited add the question info  
    if (!this.questionPrompt) {   
      if (this.props.editingQuestionIdInfo[0] !== ".") {      
        let questionInfo = this.props.editingQuestionIdInfo.toJS();
        this.questionPrompt = questionInfo.prompt;    
      } else {
        this.questionPrompt = '';
      }   
    }
  },
  cancelQuestion: function() {
    this.props.createQuestion(null, null, true);
  },
  render: function() {
    return (
      <div className="create-question-container">
        <div className="bigger-text push-bottom">Add a Question</div>
        <span className="big-text">
        <div className="push-bottom">
          <span className="push-right">Prompt </span>
          <input className="question-input" defaultValue={this.questionPrompt} type="textarea" name="question" onChange={this.handleQuestionPromptChange} />
        </div>
        <div className="push-bottom">
          <span>Response Type </span>
          <button className={ this.props.createQuestionTypeThumbCheck ? "btn push-right choose-button choice-selected" : "btn push-right choose-button" } onClick={this.chooseThumbCheck}>Thumbcheck</button>
          <button className={ this.props.createQuestionTypeMultipleChoice ? "btn push-right choose-button choice-selected" : "btn push-right choose-button" } onClick={this.chooseMultipleChoice}>Multiple Choice</button>
          <button className={ this.props.createQuestionTypeOpenResponse ? "btn push-right choose-button choice-selected" : "btn push-right choose-button" } onClick={this.chooseOpenResponse}>Open Response</button>
        </div>

        {this.props.createQuestionTypeMultipleChoice ?
         <div className="push-bottom"> 
          <button className="green btn push-right white-text choose-button-mc" onClick={this.choose3choices}>A-B-C</button>
          <button className="blue btn push-right white-text choose-button-mc" onClick={this.choose4choices}>A-B-C-D</button>
          <button className="purple btn push-right white-text choose-button-mc" onClick={this.choose5choices}>A-B-C-D-E</button>
          </div> :
         null}
        
        {this.props.a3choice ?
         <div> 
          <div className="push-bottom">
            <span>A </span>
            <input type="text" name="Aans" onChange={this.handleMultipleChoiceAChange}/>
          </div >
          <div className="push-bottom">
            <span>B </span>
            <input type="text" name="Bans" onChange={this.handleMultipleChoiceBChange}/>
          </div>
          <div className="push-bottom">
            <span>C </span>
            <input type="text" name="Cans" onChange={this.handleMultipleChoiceCChange}/>
          </div>
          </div> :
         null}

        {this.props.a4choice ?
        <div>
          <div className="push-bottom">
            <span>A </span>
            <input type="text" name="Aans" onChange={this.handleMultipleChoiceAChange}/>
          </div>
          <div className="push-bottom">
            <span>B </span>
            <input type="text" name="Bans" onChange={this.handleMultipleChoiceBChange}/>
          </div>
          <div className="push-bottom">
            <span>C </span>
            <input type="text" name="Cans" onChange={this.handleMultipleChoiceCChange}/>
          </div>
          <div className="push-bottom">
            <span>D </span>
            <input type="text" name="Dans" onChange={this.handleMultipleChoiceDChange}/>
          </div>
        </div> :
         null}
        
        {this.props.a5choice ?
        <div>
          <div className="push-bottom">
            <span>A </span>
            <input type="text" name="Aans" onChange={this.handleMultipleChoiceAChange}/>
          </div>
          <div className="push-bottom">
            <span>B </span>
            <input type="text" name="Bans" onChange={this.handleMultipleChoiceBChange}/>
          </div>
          <div className="push-bottom">
            <span>C </span>
            <input type="text" name="Cans" onChange={this.handleMultipleChoiceCChange}/>
          </div>
          <div className="push-bottom">
            <span>D </span>
            <input type="text" name="Dans" onChange={this.handleMultipleChoiceDChange}/>
          </div>
          <div className="push-bottom">
            <span>E </span>
            <input type="text" name="Eans" onChange={this.handleMultipleChoiceEChange}/>
          </div>
        </div> :
         null}
        
        <button className="btn orange white-text push-right big-text push-top" onClick={this.handleQuestionSubmission} >Create</button>
        <img className="next-icon push-top" src="/images/icons/cancel_icon1.png" onClick={ this.cancelQuestion }/>                  
        
        </span>
      </div>
    );
  }
});
