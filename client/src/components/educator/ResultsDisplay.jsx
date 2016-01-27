import React from 'react';

export default React.createClass({
  render: function() {
    console.log("resultsdisplay props", this.props);
    return (
      <div className="results-container">

        <div className="up-thumb-count">{this.props.upCount}</div>
        <div className="down-thumb-count">{this.props.downCount}</div>
        
        <button className="end-thumb-check" onClick={this.props.stopVote}>
        END VOTE
        </button>
      </div>
    );
  }
});
