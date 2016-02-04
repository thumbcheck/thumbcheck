import React from 'react';
import QuestionButton from './QuestionButton';
import renderCorrectGraphType from '../../helpers/renderCorrectGraphType';

export default React.createClass({
  renderOpen: function(){
    let answers = this.props.openResponseAnswers.toJS();

    return answers.map(function(tuple, index) {
    return <div>{tuple} </div>
  });
  },

  render: function() {
    if(this.props.questionType === 'open') {
      return (
        <div>
        <p>Answers to Open Response</p>
        <p>{this.renderOpen()}</p>
        <button className="btn orange request-btn white-text end-thumb-check" onClick={this.props.stopVote}>
          END VOTE
        </button>
        <QuestionButton {...this.props}/>
        </div>
      )
    } else {
      return (
        <div className="results-container">
          {renderCorrectGraphType(this.props)}
          <div>
            <span className="up-thumb-count">Thumbs up count: {this.props.upCount}</span>
            <span className="down-thumb-count move-right">Thumbs down count: {this.props.downCount}</span>
          </div>
          <button className="btn orange request-btn white-text end-thumb-check" onClick={this.props.stopVote}>
          END VOTE
          </button>
          <QuestionButton {...this.props}/>
        </div>
      );
    }

  }
});
