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
  renderQuestionHeader: function() {
    return (
      <div>
        <h1>Presentation: {this.props.currentPresentation.getIn(['presentation','title'])}</h1>
        <h2>Question: {this.props.currentPresentation.getIn(['currentQuestion', 'prompt'])}</h2>
      </div>
    );
  },
  componentDidMount: function() {
    this.props.getPresentationData(this.props.currentPresentationID);
  },
  render: function() {
    return (
      <div>
        {this.props.currentPresentation ? this.renderQuestionHeader() : null}
        {this.props.currentPresentation ? this.showQuestionChoices() : null}
      </div>
    );
  }
});
