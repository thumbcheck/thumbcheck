import React from 'react';
import BarGraph from './EducatorBarGraph';
import QuestionButton from './QuestionButton';
import SliderNativeBootstrap from './QuestionSlider';
import renderCorrectGraphType from '../../helpers/renderCorrectGraphType';

export default React.createClass({
  showGraph: function() {
    return this.props.showgraph === "1" ? "last-graph-container" : "dont-show";
  },

  sendCheckin: function(e) {
    if(this.props.questionType === 'multipleChoice'){
      console.log(e.target.value)
      this.props.startVote(e.target.value);
    } else {
      this.props.startVote(this.props.questionType);
    }
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
       if (this.props.questionType === 'multipleChoice') {
         return (
          <div>
          <button value="multipleChoice3" type='button' className="btn orange request-btn white-text thumb-check-start"
                         onClick={this.sendCheckin}>
                         A-B-C
          </button>
          <button type='button' value="multipleChoice4" className="btn green request-btn white-text thumb-check-start"
                 onClick={this.sendCheckin}>
                 A-B-C-D
          </button>
          <button type='button' value="multipleChoice5" className="btn blue request-btn white-text thumb-check-start"
                 onClick={this.sendCheckin}>
                 A-B-C-D-E
          </button>
          </div>
          )
       } else if (this.props.questionType === 'thumbs') {
         color = 'orange', text = 'Thumbscheck';
       } else {
         color='blue', text="Open Response";
       }
       const classNames = "btn " + color + " request-btn white-text thumb-check-start";

       return <button type='button' className={classNames}
                   onClick={this.sendCheckin}>
                   {text}
           </button>
  },
  render: function() {
    return (
      <div>
        <SliderNativeBootstrap
          defaultValue={0}
          handleChange={ this.changeSliderValue }
          step={1}
          max={2}
          min={0}
          disabled="no" />

          { this.renderProperButton() }

      <div className={this.showGraph()}>
        <h4>Results from last thumbs check</h4>
        {renderCorrectGraphType(this.props)}
        <p><button onClick={this.props.toggleThumbsCheckResultsGraph}>SHARE RESULTS WITH PARTICIPANTS</button></p>
      <div>
        <span className="up-thumb-count">Thumbs up count: {this.props.upCount}</span>
        <span className="down-thumb-count move-right">Thumbs down count: {this.props.downCount}</span>
      </div>
      </div>
        <QuestionButton {...this.props}/>
      </div>
    );
  }
});

// <div>
      //   <div id="selectorContainer">
      //       <select id="testSelectorE" name="testSelector4" onSelect={this.chooseThumbs}>
      //         <option value="thumbs" selected>Thumbs Check</option>
      //         <option value="multipleChoice3">Multiple Choice</option>
      //         <option value="open" >Open Response</option>>
      //       </select>
      //   </div>
      // <div>
