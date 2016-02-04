import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  render: function() {
    return (
      <p>
        <button type = 'button'
                className = {this.props.takingQuestions ? this.props.takingQuestions.get('buttonClass') : "btn grey white-text"}
                onClick = {this.props.toggleTakingQuestions}>
                {this.props.takingQuestions ? this.props.takingQuestions.get('buttonText') : 'Allow Questions'}
        </button>
      </p>
    );
  }
})
