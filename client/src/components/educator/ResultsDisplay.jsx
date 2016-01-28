import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="results-container">

        <div className="up-thumb-count">{this.props.upCount}</div>
        <div className="down-thumb-count">{this.props.downCount}</div>
        
        <button className="btn orange request-btn white-text end-thumb-check" onClick={this.props.stopVote}>
        END VOTE
        </button>
      </div>
    );
  }
});
