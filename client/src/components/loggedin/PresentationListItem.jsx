import React from 'react';
export default React.createClass({
  viewPresentation: function() {
    this.props.setCurrentPresentationID(this.props.presentationID);
    this.props.createOrEditPresentation();
  },
  startPreplannedPresentation: function() {
    this.props.setCurrentPresentationID(this.props.presentationID);
    this.props.startPreplannedPresentation();
  },
  render: function() {
    return (
      <div>
        {this.props.title}
        <button onClick={this.viewPresentation}>Edit</button>
        <button onClick={this.startPreplannedPresentation}>Play</button>
      </div>
    );
  }
});
