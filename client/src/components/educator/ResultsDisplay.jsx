import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="results-container">

// still need to add count props in following two divs
      <div className="up-thumb-count"></div>
      <div className="down-thumb-count"></div>
      
      <button className="end-thumb-check"
              onClick={() => this.props.endVote()}>
      </button>
    </div>;
  }
});
