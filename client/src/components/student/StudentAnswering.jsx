import React from 'react';
import checkHasVoted from '../../helpers/checkHasVoted';

export default React.createClass({
  upvoteClick: function() {
    this.props.upvote();
    this.props.vote(window.localStorage.getItem('participantID'));
  },
  downvoteClick: function() {
    this.props.downvote();
    console.log(window.localStorage.getItem('participantID'), 'console lgo participant');
    this.props.vote(window.localStorage.getItem('participantID'));

  },
  render: function() {
    return (
      <div className="answering">
        <span className="thumb-up"><img src="/images/thumbsup3.ico" className="thumbs" onClick ={this.upvoteClick}></img></span>
        <span className="thumb-down"><img src="/images/thumbsdown3.ico" className="thumbs" onClick={this.downvoteClick}></img></span>
      </div>
    );
  }
});
