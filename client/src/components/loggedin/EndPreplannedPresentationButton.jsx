import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div>
        <div className='play-container'></div>
        <button type = 'button'
                className = "btn grey white-text"
                onClick = {this.props.endPreplannedPresentation}>
                End Presentation
        </button>
      </div>
    );
  }
});
