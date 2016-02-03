import React from 'react';
import checkHasVoted from '../../helpers/checkHasVoted';

export default React.createClass({
  upvoteClick: function() {
    this.props.upvote();
    this.props.vote(window.localStorage.getItem('participantID'));
  },

  downvoteClick: function() {
    this.props.downvote();
    this.props.vote(window.localStorage.getItem('participantID'));
  },

  multipleChoiceA: function() {
    this.props.multipleChoiceAnswer('a');
    this.props.vote(window.localStorage.getItem('participantID'));
  },

  multipleChoiceB: function() {
    this.props.multipleChoiceAnswer('b');
    this.props.vote(window.localStorage.getItem('participantID'));
  },

  multipleChoiceC: function() {
    this.props.multipleChoiceAnswer('c');
    this.props.vote(window.localStorage.getItem('participantID'));
  },

  renderProperElement: function() {
    if(this.props.questionType === 'thumbs') {
      return (
        <div>
        <span className="thumb-up"><img src="/images/thumbsup3.ico" className="thumbs" onClick ={this.upvoteClick}></img></span>
        <span className="thumb-down"><img src="/images/thumbsdown3.ico" className="thumbs" onClick={this.downvoteClick}></img></span>
        </div>
      )
    } else if (this.props.questionType === 'multipleChoice3') {
      return (
        <div>
        <a className="btn btn-warning btn-lg" role="button" onClick={this.multipleChoiceA} > A </a>
        <a className="btn btn-warning btn-lg" role="button" onClick={this.multipleChoiceB} > B </a>
        <a className="btn btn-warning btn-lg" role="button" onClick={this.multipleChoiceC} > C </a>
        </div>
      )
    }
  },

  render: function() {
    console.log('question type in student', this.props.questionType);
    return (
      <div className="answering">
        {this.renderProperElement()}
      </div>
    );
  }
});
