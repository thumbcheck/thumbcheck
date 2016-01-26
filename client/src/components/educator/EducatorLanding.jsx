import React from 'react';

export default React.createClass({
  render: function() {
    return <div>
      <button className="thumb-check-start"
              onClick={() => this.props.startVote()}>
      </button>
    </div>;
  }
});
