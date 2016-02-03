import React from 'react';
import BarGraph from './EducatorBarGraph';
import QuestionButton from './QuestionButton';

export default React.createClass({
  showGraph: function() {
    return this.props.showgraph === "1" ? "last-graph-container" : "dont-show";
  },

  multipleChoice3: function() {
    this.props.startVote(3);
  },

  render: function() {
    return (
      <div>
      <div id="selectorContainer">        
          <select id="testSelectorE" name="testSelector4">
            <option value="0" >Thumbs Check</option>
            <option value="1" selected>Multiple Choice</option>
            <option value="2" >Open Response</option>
          </select>
      </div>  

        <button type='button' className="btn orange request-btn white-text thumb-check-start"
                onClick={this.props.startVote}>
          START VOTE
        </button>

        <button type='button' className="btn orange request-btn white-text thumb-check-start"
                onClick={this.multipleChoice3}>
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
