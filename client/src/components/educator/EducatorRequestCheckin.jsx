import React from 'react';
import BarGraph from './EducatorBarGraph';
import QuestionButton from './QuestionButton';

export default React.createClass({
  render: function() {
    return (
      <div>
        <button type='button' className="btn orange request-btn white-text thumb-check-start"
                onClick={this.props.startVote}>
          START VOTE
        </button>
        <div className="last-graph-container">
          <h4>Results from last thumbs check</h4> 
          <BarGraph ref="resultsDisplay" lastOrCurrent="last-result-graph" {...this.props} />
        </div>
        <QuestionButton {...this.props}/>
      </div>
    );
  }
});
