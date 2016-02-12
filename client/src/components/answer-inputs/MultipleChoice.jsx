import React from 'react';

export default React.createClass({
  sendChoice: function(e) {
    this.props.multipleChoiceAnswer(e.target.value);
    this.props.vote(window.localStorage.getItem('participantID'));
  },

  renderProperElement: function() {
    if (this.props.questionType === 'multipleChoice3') {
      return (
        <div>
          <button value="a" className="btn push-right white-text btn-lg btn-mult btn-b blue bigger-text-vh" onClick={this.sendChoice} > A </button>
          <button value="b" className="btn push-right white-text btn-lg btn-mult btn-a orange bigger-text-vh" onClick={this.sendChoice} > B </button>
          <button value="c" className="btn push-right white-text btn-lg btn-mult btn-c green bigger-text-vh" onClick={this.sendChoice} > C </button>
        </div>
      )
    } else if (this.props.questionType === 'multipleChoice4') {
      return (
        <div>
          <button value="a" className="btn push-right white-text btn-lg btn-mult btn-b blue bigger-text-vh" onClick={this.sendChoice} > A </button>
          <button value="b" className="btn push-right white-text btn-lg btn-mult btn-a orange bigger-text-vh" onClick={this.sendChoice} > B </button>
          <button value="c" className="btn push-right white-text btn-lg btn-mult btn-c green bigger-text-vh" onClick={this.sendChoice} > C </button>
          <button value="d" className="btn push-right white-text btn-lg btn-mult btn-d yellow bigger-text-vh" onClick={this.sendChoice} > D </button>
        </div>
      )
    } else if (this.props.questionType === 'multipleChoice5') {
      return (
        <div>
          <button value="a" className="btn push-right white-text btn-lg btn-mult btn-b blue bigger-text-vh" onClick={this.sendChoice} > A </button>
          <button value="b" className="btn push-right white-text btn-lg btn-mult btn-a orange bigger-text-vh" onClick={this.sendChoice} > B </button>
          <button value="c" className="btn push-right white-text btn-lg btn-mult btn-c green bigger-text-vh" onClick={this.sendChoice} > C </button>
          <button value="d" className="btn push-right white-text btn-lg btn-mult btn-d yellow bigger-text-vh" onClick={this.sendChoice} > D </button>
          <button value="e" className="btn push-right white-text btn-lg btn-mult btn-e purple bigger-text-vh" onClick={this.sendChoice} > E </button>
        </div>
      )
    }
  },

  render: function() {
    return (
      <div>
        {this.renderProperElement()}
      </div>
    )
  }
});
