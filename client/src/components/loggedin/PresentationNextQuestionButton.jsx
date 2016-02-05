import React from 'react';
// must implement this.props.nextQuestion

export default React.createClass({
  render: function() {
    return (
      <div>
        <div className='play-container'></div>
        <button type = 'button'
                className = "btn grey white-text"
                onClick = {this.props.nextQuestion}>
                Next Question
        </button>
      </div>
    );
  }
});
