import React from 'react';
import {toJS} from 'immutable';
import PresentationListItem from './PresentationListItem';
// must create this.props.createPresentation and deal with editing a presentation

export default React.createClass({
  getCookie: function(name) {
    var regexp = new RegExp("(?:^" + name + "|;\s*"+ name + ")=(.*?)(?:;|$)", "g");
    var result = regexp.exec(document.cookie);
    return (result === null) ? null : result[1];
  },

  componentDidMount: function() {
    let isLoggedIn = this.getCookie('remember');
    const that = this;
    $.ajax({
      type: 'POST',
      url: '/api/userid/',
      dataType: "json",
      data: {
        cookies: isLoggedIn
      }
    })
    .success(function(data) {
      that.props.getAllPresentations(data.educator_id);
      that.props.setEducatorID(data.educator_id);
    });
    //let isLoggedIn = this.decodeCookie(this.getCookie('remember'));
    //this.props.getAllPresentations(isLoggedIn.educator_id);
  },
  displayPresentations: function() {
    let presentationArray = this.props.allEducatorPresentations;
    return presentationArray.map((presentation) => {
      presentation = presentation.toJS();
      return (        
          <PresentationListItem key={presentation.id} title={presentation.title} presentationID={presentation.id} {...this.props} />        
      )  
    });
  },
  createPresentation: function() {
    this.props.clearCurrentPresentation();
    this.props.createOrEditPresentation();
  },
  render: function() {
    console.log('main page', this.props);
    return (
      <div className='presentation-list-container'>
        <div className='presentation-list-header text-center'>
          Your Presentations
        </div>
        <div className="col-md-10 col-md-offset-1 col-xs-12">
          <div className="panel panel-default table-responsive presentation-list-table-container ">
            <table className="table table-hover table-bordered content-table very-light-grey">
              <tbody>
                {this.props.allEducatorPresentations ? this.displayPresentations() : null}
              </tbody>    
            </table>
          </div>        
        </div>
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
