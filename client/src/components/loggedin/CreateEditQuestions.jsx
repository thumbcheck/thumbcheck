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
    console.log("this is GREAT!!!");
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
    let questionData= {};
    questionData.prompt = this.questionPrompt;
    questionData.presentationID = this.props.currentPresentationID;
    let questionType;
    if (this.props.createQuestionTypeThumbCheck) {
      questionType = 'Thumbs Check';
    } else if (this.props.createQuestionTypeOpenResponse) {
      questionType = 'Open Respose;';
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
    // if it's an edited quesiton, pass along the ID for PUT
    let editingId = false;
    if (this.props.editingQuestionIdInfo[0] !== ".") {
      editingId = this.props.editingQuestionIdInfo.toJS().id;
    }        
    console.log('questionData', questionData);
    this.props.addPresentationQuestion(questionData, editingId);
    this.props.createQuestion();
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
        console.log('editing this question', this.props.editingQuestionIdInfo.toJS());
        let questionInfo = this.props.editingQuestionIdInfo.toJS();
        this.questionPrompt = questionInfo.prompt;    
      } else {
        this.questionPrompt = '';
      }   
    }
  },
  render: function() {
    console.log('create edit question page', this.props);
    return (
      <div>
        <div>
          <span>Question: </span>
          <input defaultValue={this.questionPrompt} type="text" name="question" onChange={this.handleQuestionPromptChange} />
        </div>
        <div>
          <span>Response Type: </span>
          <button onClick={this.chooseThumbCheck}>Thumbcheck</button>
          <button onClick={this.chooseMultipleChoice}>Multiple Choice</button>
          <button onClick={this.chooseOpenResponse}>Open Response</button>
        </div>

        {this.props.createQuestionTypeMultipleChoice ?
         <div> 
          <button onClick={this.choose3choices}>A-B-C</button>
          <button onClick={this.choose4choices}>A-B-C-D</button>
          <button onClick={this.choose5choices}>A-B-C-D-E</button>
          </div> :
         null}
        
        {this.props.a3choice ?
         <div> 
          <div>
            <span>A: </span>
            <input type="text" name="Aans" onChange={this.handleMultipleChoiceAChange}/>
          </div>
          <div>
            <span>B: </span>
            <input type="text" name="Bans" onChange={this.handleMultipleChoiceBChange}/>
          </div>
          <div>
            <span>C: </span>
            <input type="text" name="Cans" onChange={this.handleMultipleChoiceCChange}/>
          </div>
          </div> :
         null}

        {this.props.a4choice ?
        <div>
          <div>
            <span>A: </span>
            <input type="text" name="Aans" onChange={this.handleMultipleChoiceAChange}/>
          </div>
          <div>
            <span>B: </span>
            <input type="text" name="Bans" onChange={this.handleMultipleChoiceBChange}/>
          </div>
          <div>
            <span>C: </span>
            <input type="text" name="Cans" onChange={this.handleMultipleChoiceCChange}/>
          </div>
          <div>
            <span>D: </span>
            <input type="text" name="Dans" onChange={this.handleMultipleChoiceDChange}/>
          </div>
        </div> :
         null}
        
        {this.props.a5choice ?
        <div>
          <div>
            <span>A: </span>
            <input type="text" name="Aans" onChange={this.handleMultipleChoiceAChange}/>
          </div>
          <div>
            <span>B: </span>
            <input type="text" name="Bans" onChange={this.handleMultipleChoiceBChange}/>
          </div>
          <div>
            <span>C: </span>
            <input type="text" name="Cans" onChange={this.handleMultipleChoiceCChange}/>
          </div>
          <div>
            <span>D: </span>
            <input type="text" name="Dans" onChange={this.handleMultipleChoiceDChange}/>
          </div>
          <div>
            <span>E: </span>
            <input type="text" name="Eans" onChange={this.handleMultipleChoiceEChange}/>
          </div>
        </div> :
         null}
        <button onClick={this.handleQuestionSubmission}>
          Save
        </button>

      </div>
    );
  }
});
