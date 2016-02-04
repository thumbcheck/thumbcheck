import React from 'react';

export default React.createClass({
  upvoteClick: function() {
    this.props.upvote();
    this.props.vote(window.localStorage.getItem('participantID'));
  },

  downvoteClick: function() {
    this.props.downvote();
    this.props.vote(window.localStorage.getItem('participantID'));
  },

  render: function() {
    return (
        <div>
          <span className="thumb-up"><img src="/images/thumbsup3.ico" className="thumbs" onClick ={this.upvoteClick}></img></span>
          <span className="thumb-down"><img src="/images/thumbsdown3.ico" className="thumbs" onClick={this.downvoteClick}></img></span>
        </div>
      )
  }
});