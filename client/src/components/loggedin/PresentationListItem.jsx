import React from 'react';
export default React.createClass({
  viewPresentation: function() {
    this.props.setCurrentPresentationID(this.props.presentationID);
    console.log(this.props, 'loggging current presentation id')
    this.props.createOrEditPresentation();
  },
  render: function() {    
    return (
      <div>
        {this.props.title}
        <button onClick={this.viewPresentation}>Edit</button>
        <button onClick={this.props.startPreplannedPresentation}>Play</button>
      </div>
    );
  }
});
