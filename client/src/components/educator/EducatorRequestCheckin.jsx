import React from 'react';
import BarGraph from './EducatorBarGraph';
import QuestionButton from './QuestionButton';
<<<<<<< 013274dfd8aad25e42a63e2e6006a630813083eb
import SliderNativeBootstrap from './QuestionSlider';
=======
import BinaryThumbsGraph from '../results-graphs/BinaryThumbs';
>>>>>>> Refactors educator graph into binarythumbs graph

export default React.createClass({
  showGraph: function() {
    return this.props.showgraph === "1" ? "last-graph-container" : "dont-show";
  },

  sendMultipleChoice3: function() {
    this.props.startVote(3);
  },

  sendThumbscheck: function() {
    this.props.startVote('thumbs');
  },

  triggerVote: function() {

  },

  chooseThumbs: function(e) {
    console.log("SELECTOR CHANGED!!!!!!!!", e.target.value)
    this.props.chooseQuestionType('thumbs');
    console.log('in enducator checkin', this.props.questionType);
  },

  chooseMultiple: function() {
    this.props.chooseQuestionType('multipleChoice3');
    console.log('in enducator checkin', this.props.questionType);
  },

  chooseOpen: function() {
    this.props.chooseQuestionType('open');
    console.log('in enducator checkin', this.props.questionType);
  },
  changeSliderValue: function(e) {
    const selection = e.target.value.toString(); 
    let questionSelection = '';        
    switch (selection) {
      case '0':
        questionSelection = 'thumbs';
        break;
      case '1': 
        questionSelection = 'multipleChoice3';
        break;
      case '2':
        questionSelection = 'open';
        break;
      default: 
        questionSelection = 'thumbs';
    }    
      
  },

  render: function() {

    console.log('question type', this.props.questionType);
    let options = [
      { value: 'thumbs', label: 'One' },
      { value: 'multipleChoice3', label: 'Two' },
      { value: 'open', label: 'Two' }
    ];

    return (      
    
      <div>
        <SliderNativeBootstrap
          defaultValue={0}
          handleChange= { this.changeSliderValue }
          step={1}
          max={2}
          min={0}
          disabled="no" />
    


        <button type='button' className="btn orange request-btn white-text thumb-check-start"
                onClick={this.sendThumbscheck}>
          Thumbscheck
        </button>

        <button type='button' className="btn green request-btn white-text thumb-check-start"
                onClick={this.sendMultipleChoice3}>
          Multiple choice
        </button>

        <button type='button' className="btn blue request-btn white-text thumb-check-start"
                onClick={this.sendMultipleChoice3}>
          Open Response
        </button>      


      <div className={this.showGraph()}>
        <h4>Results from last thumbs check</h4>
        {/*<BarGraph ref="resultsDisplay" lastOrCurrent="last-result-graph" {...this.props} />*/}
        <BinaryThumbsGraph ref='resultsDisplay' lastOrCurrent='last-result-graph' {...this.props} />
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
