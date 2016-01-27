import React from 'react';

export default React.createClass({
  upvoteClick: function() {
    this.props.upvote();
    this.props.vote();
  },
  downvoteClick: function() {
    this.props.downvote();
    this.props.vote();   
  },
  render: function() {
    return (
      <div className="answering">
        <button className="thumb-up" onClick ={this.upvoteClick}>THUMBS UP</button>
        <button className="thumb-down" onClick={this.downvoteClick}>THUMBS DOWN</button>
      </div>
    );
  }
});
