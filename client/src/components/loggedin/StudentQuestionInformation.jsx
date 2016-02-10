import React from 'react';
import {List,Map} from 'immutable';

export default React.createClass({
  showQuestionChoices: function() {
    let questionChoices = this.props.currentPresentation.getIn(['currentQuestion','questionChoices']);
    console.log('questionchoices', this.props.currentPresentation.getIn(['currentQuestion']));
    if (questionChoices) {
      questionChoices = questionChoices.toJS();
      return questionChoices.map((choice) => {
        return <div>{choice[0]}: {choice[1]}</div>
      });      
    }
  },
  render: function() {
    console.log('in student question information')
    return (
      <div>
        <h1>{this.props.currentPresentation.getIn(['currentQuestion', 'prompt'])}</h1>
        {this.showQuestionChoices()}
      </div>
    );
  }
});
