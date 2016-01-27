import React from 'react';

export default React.createClass({

  render: function() {
    return (
      <div className="answering">
        <button className="thumb-up" onClick ={this.props.vote}>THUMBS UP</button>
        <button className="thumb-down" onClick={this.props.vote}>THUMBS DOWN</button>
      </div>
    );
  }
});
