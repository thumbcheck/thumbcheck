import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div>
        <button type='button' className="btn orange request-btn white-text thumb-check-start"
                onClick={this.props.startVote}>
          START VOTE
        </button>
      </div>
    );
  }
});
