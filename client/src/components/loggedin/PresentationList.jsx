import React from 'react';
import {toJS} from 'immutable';
import PresentationListItem from './PresentationListItem';
// must create this.props.createPresentation and deal with editing a presentation

export default React.createClass({
  componentDidMount: function() {
    this.props.getAllPresentations(this.props.educatorID);
  },
  displayPresentations: function() {
    // var presentationArray = this.props.presentationData;
    // var presentationArray = [{title: 'George Washington'},{title: 'Crack Reactor'}];
    let presentationArray = this.props.allEducatorPresentations;
    return presentationArray.map((presentation) => {
      presentation = presentation.toJS();
      return <PresentationListItem title={presentation.title} presentationID={presentation.id} {...this.props} />;
    });
  },
  createPresentation: function() {
    this.props.clearCurrentPresentation();
    this.props.createOrEditPresentation();
  },
  render: function() {
    return (
      <div>
        <h4>Room name: <strong>{this.props.currentRoom}</strong></h4>
        <h4>Share this URL: <strong>{window.location.href.split('?')[0]}</strong></h4>
        <h2>Presentations:</h2>
        {this.props.allEducatorPresentations ? this.displayPresentations() : null}
        <button type = 'button'
                className = "btn grey white-text"
                onClick = {this.createPresentation}>
                Create Presentation
        </button>
        <div className='presentations-container'></div>
      </div>
    );
  }
});
