import React from 'react';
import {List,Map} from 'immutable';

export default React.createClass({
  showQuestionChoices: function() {
    let questionChoices = this.props.currentPresentation.getIn(['currentQuestion','questionChoices']);
    if (questionChoices) {
      questionChoices = questionChoices.toJS();
      return questionChoices.map((choice) => {
        return <div>{choice[0]}: {choice[1]}</div>
      });      
    }
  },
  render: function() {
    return (
      <div>
        <h1>{this.props.currentPresentation.getIn(['currentQuestion', 'title'])}</h1>
        {this.showQuestionChoices()}
      </div>
    );
  }
});
