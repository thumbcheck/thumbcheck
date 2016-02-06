import React from 'react';
import {List,Map} from 'immutable';

export default React.createClass({
  showQuestionChoices: function() {
    let questionChoices = this.props.currentPresentation.getIn(['currentQuestion','questionChoices']).toJS();
    // let questionChoices = [{letter: 'a', content:'green'},{letter: 'b', content:'blue'},{letter: 'c', content:'red'}];
    return questionChoices.map((choice) => {
      return <div>{choice.letter}: {choice.content}</div>
    });
  },
  render: function() {
    return (
      <div>
        <h1>Presentation: {this.props.currentPresentation.get('title')}</h1>
        <h2>Question: {this.props.currentPresentation.getIn(['currentQuestion', 'title'])}</h2>
        {this.showQuestionChoices()}
      </div>
    );
  }
});
