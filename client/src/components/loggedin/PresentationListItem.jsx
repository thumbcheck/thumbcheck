import React from 'react';
export default React.createClass({
  viewPresentation: function() {
    this.props.setCurrentPresentationID(this.props.presentationID);
    this.props.createOrEditPresentation();
  },
  startPreplannedPresentation: function() {
    this.props.setCurrentPresentationID(this.props.presentationID);
    console.log('in preplanned presentation', this.props.presentationID);
    this.props.startPreplannedPresentation();
  },
  deletePresentation: function() {    
    this.props.deletePresentation(this.props.presentationID, this.props.educatorID);

  },
  render: function() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td onClick={this.startPreplannedPresentation}>Play</td>        
        <td className=" move-right" onClick={this.viewPresentation}>Edit</td>            
        <td className="remove-icon move-right" onClick={ this.deletePresentation } aria-hidden="true"><img className="remove-icon" src="/images/icons/remove.png"/></td>                                       
      </tr>
    );
  }
});
