import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div>
        <button type='button' className="thumb-check-start"
                onClick={this.props.startVote}>
          START VOTE
        </button>
      </div>
    );
  }
});
