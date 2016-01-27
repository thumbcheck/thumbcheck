import React from 'react';

export default React.createClass({
  upvoteClick: function() {
    this.props.vote();
    this.props.upvote();
    console.log('asdf');
  },
  render: function() {
    return (
      <div className="answering">
        <button className="thumb-up" onClick ={this.upvoteClick}>THUMBS UP</button>
        <button className="thumb-down" onClick={this.props.vote}>THUMBS DOWN</button>
      </div>
    );
  }
});
