import React from 'react';
import QuestionButton from './QuestionButton';
import SliderNativeBootstrap from './QuestionSlider';
import renderCorrectGraphType from '../../helpers/renderCorrectGraphType';
import PresentationNextQuestionButton from '../loggedin/PresentationNextQuestionButton';
import EducatorQuestionInformation from '../loggedin/EducatorQuestionInformation';
import PreplannedPresentationVotingButton from '../loggedin/PreplannedPresentationVotingButton';
import EndPreplannedPresentationButton from '../loggedin/EndPreplannedPresentationButton';

export default React.createClass({
  showGraph: function() {
    return this.props.showgraph === true ? "last-graph-container" : "dont-show";
  },

  sendCheckin: function() {
    // if(this.props.questionType === 'multipleChoice'){
    this.props.startVote(this.props.questionType);
      // } else {
    //   this.props.startVote(this.props.questionType);
    // }
  },

  sendCheckin3: function() {
    // if(this.props.questionType === 'multipleChoice'){
      this.props.startVote('multipleChoice3');
    // } else {
    //   this.props.startVote(this.props.questionType);
    // }
  },

  sendCheckin4: function() {
    // if(this.props.questionType === 'multipleChoice'){
      this.props.startVote('multipleChoice4');
    // } else {
    //   this.props.startVote(this.props.questionType);
    // }
  },

  sendCheckin5: function() {
    // if(this.props.questionType === 'multipleChoice'){
      this.props.startVote('multipleChoice5');
    // } else {
    //   this.props.startVote(this.props.questionType);
    // }
  },

  changeSliderValue: function(e) {
    const selection = e.target.value.toString();
    let questionSelection = '';
    switch (selection) {
      case '0':
        questionSelection = 'thumbs';
        break;
      case '1':
        questionSelection = 'multipleChoice';
        break;
      case '2':
        questionSelection = 'open';
        break;
      default:
        questionSelection = 'thumbs';
    }
    this.props.chooseQuestionType(questionSelection);
  },

  renderProperButton: function() {
    if (this.props.questionType === undefined) {this.props.chooseQuestionType('thumbs');}
       let color = 'orange';
       let text = '';
       if (this.props.questionType && this.props.questionType[0].toLowerCase() === 'm') {
         return (
          <div>
            <button value="multipleChoice3" type='button' className="btn green request-btn white-text thumb-check-start push-right" onClick={this.sendCheckin3}>
              A-B-C
            </button>
            <button type='button' value="multipleChoice4" className="btn blue request-btn white-text thumb-check-start push-right" onClick={this.sendCheckin4}>
              A-B-C-D
            </button>
            <button type='button' value="multipleChoice5" className="btn purple request-btn white-text thumb-check-start" onClick={this.sendCheckin5}>
              A-B-C-D-E
            </button>
          </div>
          )
       } else if (this.props.questionType === 'thumbs') {
         color = 'orange', text = 'Thumbcheck';
       } else {
         color='blue', text="Open Response";
       }
       const classNames = "btn " + color + " request-btn white-text thumb-check-start";

       return <button type='button' className={classNames} onClick={this.sendCheckin}>
                {text}
              </button>
  },
  mapStateToSliderNumber: function() {
    let questionType = this.props.questionType;
    if(questionType === undefined) {
      return 0;
    }
    if (questionType[0].toLowerCase() === 'm') {
      return 1;
    } else if (questionType === 'open') {
      return 2;
    } else {
      return 0;
    }
  },
  renderNextQuestionButton: function() {
    if(this.props.preplannedPresentation) {
      return (
        <div className="pull-right">
          <PresentationNextQuestionButton {...this.props}/>          
        </div>
      )
    } else {
      return null;
    }
  },
  renderEndPresentationButton: function() {
    if(this.props.preplannedPresentation) {
      return (
        <div className="pull-left">          
          <EndPreplannedPresentationButton {...this.props}/>
        </div>
      )
    } else {
      return null;
    }
  },
  render: function() {
    return (      
      <div>
        {!this.props.preplannedPresentation ? 
          <div>
            <div className="big-text push-bottom">Select Question Type</div>
            <SliderNativeBootstrap
            defaultValue = {this.mapStateToSliderNumber()}
            handleChange={ this.changeSliderValue }
            step={1}
            max={2}
            min={0}
            disabled="no" />
          </div>
          : null}

      {/** Render question information if in preplanned presentation*/}
        {this.renderNextQuestionButton()}        
        {this.props.preplannedPresentation ? <EducatorQuestionInformation {...this.props} /> : null}        
        {this.props.preplannedPresentation ? <PreplannedPresentationVotingButton {...this.props} /> : this.renderProperButton()}        

        <div className={this.showGraph()}>
          <div>Results from last check-in</div>
          {renderCorrectGraphType(this.props)}
        </div>

        
        {!this.props.showgraph || this.props.shareThumbsCheckResults || this.props.sharingAllThumbsCheckResults ?
          <p></p> :
          <p><button type='button' className='btn grey white-text push-top' onClick={this.props.toggleThumbsCheckResultsGraph}>Show Results to Participants</button></p>
        }
        {/* <QuestionButton takingQuestions={this.props.takingQuestions}
                        toggleTakingQuestions={this.props.toggleTakingQuestions} /> */}
        { this.renderEndPresentationButton() }

      </div>
    );
  }
});
