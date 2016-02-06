import React from 'react';
import PresentationListItem from './PresentationListItem';
// must create this.props.createPresentation and deal with editing a presentation

export default React.createClass({
  displayPresentations: function() {
    // var presentationArray = this.props.presentationData;
    var presentationArray = [{title: 'George Washington'},{title: 'Crack Reactor'}];
    return presentationArray.map((presentationTitle) => {
      return <PresentationListItem title={presentationTitle.title} {...this.props} />;
    });
  },
  render: function() {
    return (
      <div>
        <h4>Room name: <strong>{this.props.currentRoom}</strong></h4>
        <h4>Share this URL: <strong>{window.location.href.split('?')[0]}</strong></h4>
        <h2>Presentations:</h2>
        {this.displayPresentations()}
        <button type = 'button'
                className = "btn grey white-text"
                onClick = {this.props.createOrEditPresentation}>
                Create Presentation
        </button>
        <div className='presentations-container'></div>
      </div>
    );
  }
});
