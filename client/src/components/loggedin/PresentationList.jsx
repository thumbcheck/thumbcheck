import React from 'react';
// must create this.props.createPresentation and deal with editing a presentation

export default React.createClass({
  render: function() {
    return (
      <div>
        <h4>Room name: <strong>{this.props.currentRoom}</strong></h4>
        <h4>Share this URL: <strong>{window.location.href.split('?')[0]}</strong></h4>
        <h2>Presentations:</h2>
        <button type = 'button'
                className = "btn grey white-text"
                onClick = {this.props.createPresentation}>
                Create Presentation
        </button>
        <div className='presentations-container'></div>
      </div>
    );
  }
});
