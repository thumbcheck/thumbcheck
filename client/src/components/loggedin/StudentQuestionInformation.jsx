import React from 'react';

export default React.createClass({
  showQuestionChoices: function() {
    // let questionChoices = this.props.currentQuestion;
    let questionChoices = [{letter: 'a', content:'green'},{letter: 'b', content:'blue'},{letter: 'c', content:'red'}];
    return questionChoices.map((choice) => {
      return <div>{choice.letter}: {choice.content}</div>
    });
  },
  render: function() {
    return (
      <div>
        <h1>{/*this.props.currentQuestion.title*/}Favorite Color?</h1>
        {this.showQuestionChoices()}
      </div>
    );
  }
});
