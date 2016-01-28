import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="results-container">

        <div className="up-thumb-count">Thumbs up: {this.props.upCount}</div>
        <div className="down-thumb-count">Thumbs down: {this.props.downCount}</div>
        
        <button className="btn orange request-btn white-text end-thumb-check" onClick={this.props.stopVote}>
        END VOTE
        </button>
      </div>
    );
  }
});
