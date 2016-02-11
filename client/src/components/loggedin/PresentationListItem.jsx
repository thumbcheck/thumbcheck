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
      <tr className="row">
        <td className="presentation-list-item-button-container presentation-list-item-play col-md-12 col-xs-12" onClick={this.startPreplannedPresentation}>
          {this.props.title}
          {/*<span className='hidden-small-screen'>Play</span>*/}
          <img className="presentation-list-item-button" src="/images/playbutton.png" />  
        </td>
        {/*<td className="presentation-list-item-button-container presentation-list-item-play" onClick={this.startPreplannedPresentation}>
          <span className='hidden-xs'>Play</span>
          <img className="presentation-list-item-button" src="/images/playbutton.png" />
        </td>*/}            
        <td className="presentation-list-item-button-container presentation-list-item-edit" onClick={this.viewPresentation}>
          <span className='hidden-small-screen'>Edit</span>
          <img className="presentation-list-item-button" src="/images/editbutton.ico" />
        </td>        
        <td className="presentation-list-item-delete" onClick={ this.deletePresentation } aria-hidden="true"><img className="remove-icon" src="/images/icons/remove.png"/></td>                                       
      </tr>
    );
  }
});
