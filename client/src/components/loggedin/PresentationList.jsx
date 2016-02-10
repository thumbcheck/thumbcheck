import React from 'react';
import {toJS} from 'immutable';
import PresentationListItem from './PresentationListItem';
// must create this.props.createPresentation and deal with editing a presentation
import jwt from 'jwt-simple';

export default React.createClass({
  getCookie: function(name) {
    var regexp = new RegExp("(?:^" + name + "|;\s*"+ name + ")=(.*?)(?:;|$)", "g");
    var result = regexp.exec(document.cookie);
    return (result === null) ? null : result[1];
  },

  decodeCookie: function(cookie) {
    const tokenSecret = 'shhhh baby es ok';
    return jwt.decode(cookie, tokenSecret);
  },

  componentDidMount: function() {
    // let isLoggedIn = this.getCookie('remember');
    // $.ajax({
    //   type: 'POST',
    //   url: '/api/userid/',
    //   dataType: "json",
    //   data: {
    //     cookies: isLoggedIn
    //   }
    // })
    // .success(function(data) {
    //   // if(data.found === 1) {
    //   //   console.log('User Found. Trigger Login')
    //   //   that.props.educatorLogin(username);
    //   //   window.location.assign(username+'?type=host');
    //   // } else {
    //   //   that.props.setError('Invalid username or password. Please try again.');
    //   // }
    //   console.log('in component did mount success', data, data.educator_id);
    //   this.props.getAllPresentations(data.educator_id);
    //   this.props.setEducatorID(data.educator_id);
    // });
    let isLoggedIn = this.decodeCookie(this.getCookie('remember'));
    this.props.getAllPresentations(isLoggedIn.educator_id);
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
    console.log('main page', this.props);
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
