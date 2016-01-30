import React from 'react';
import BarGraph from './EducatorBarGraph';
import QuestionButton from './QuestionButton';

export default React.createClass({
  showGraph: function() {
    // change later to conditional
    return this.props.showgraph === "1" ? "last-graph-container" : "last-graph-container";
  },
  render: function() {    
    return (
      <div>
        <button type='button' className="btn orange request-btn white-text thumb-check-start"
                onClick={this.props.startVote}>
          START VOTE
        </button>
        <div className={this.showGraph()}>
          <h4>Results from last thumbs check</h4> 
          <BarGraph ref="resultsDisplay" lastOrCurrent="last-result-graph" {...this.props} />
        </div>
        <QuestionButton {...this.props}/>
      </div>
    );
  }
});
