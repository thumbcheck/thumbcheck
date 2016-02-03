import React from 'react';
import BarGraph from './EducatorBarGraph';
import QuestionButton from './QuestionButton';

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

  chooseThumbs: function() {
    console.log("SELECTOR CHANGED!!!!!!!!")
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

  render: function() {
    console.log('question type', this.props.questionType);
    return (
      <div>
      <div id="selectorContainer">
          <select id="testSelectorE" name="testSelector4" onChange={this.chooseThumbs}>
            <option value="thumbs" selected>Thumbs Check</option>
            <option value="multipleChoice3" onChange={this.chooseMultiple}>Multiple Choice</option>
            <option value="open" onChange={this.chooseOpen}>Open Response</option>>
          </select>
      </div>

        <button type='button' className="btn orange request-btn white-text thumb-check-start"
                onClick={this.sendThumbscheck}>
          START VOTE
        </button>

        <button type='button' className="btn orange request-btn white-text thumb-check-start"
                onClick={this.sendMultipleChoice3}>
          Multiple choice
        </button>

        <div className={this.showGraph()}>
          <h4>Results from last thumbs check</h4>
          <BarGraph ref="resultsDisplay" lastOrCurrent="last-result-graph" {...this.props} />
          <button onClick={this.props.toggleThumbsCheckResultsGraph}>SHARE RESULTS WITH PARTICIPANTS</button>
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
