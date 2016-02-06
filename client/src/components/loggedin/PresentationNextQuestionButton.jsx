import React from 'react';
// must implement this.props.nextQuestion

export default React.createClass({
  render: function() {
    console.log(this.props, 'rops');
    return (
      <div>
        <div className='play-container'></div>
        <button type = 'button'
                className = "btn grey white-text"
                onClick = {this.props.moveToNextQuestion}>
                Next Question
        </button>
      </div>
    );
  }
});
