import React from 'react';
import {connect} from 'react-redux';
import {toJS} from 'immutable';
import PresentationList from './PresentationList';
import {Educator} from '../educator/EducatorMain';
import EditPresentation from './EditPresentation';
import Navbar from '../educator/NavBarEducator';
import CreateEditQuestions from './CreateEditQuestions';
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
    let isLoggedIn = this.decodeCookie(this.getCookie('remember'));
    console.log('componentDidMount', isLoggedIn.educator_id);
    this.props.setEducatorID(isLoggedIn.educator_id);
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
    //   this.props.setEducatorID(data.educator_id);
    // });

  },

  render: function() {
    //this.getEducatorID();
    console.log('EDUCATOR ID', this.props.educatorID);

    if (this.props.preplannedPresentation) {
      return <Educator {...this.props} />
    } else if (this.props.editingOrCreatingPresentation) {
      return (
        <div>
          <Navbar lowerStudentHand={this.props.lowerStudentHand}
               questions={this.props.questions} toggleTakingQuestions={this.props.toggleTakingQuestions}
               sharingAllThumbsCheckResults={this.props.sharingAllThumbsCheckResults} takingQuestions={this.props.takingQuestions}
<<<<<<< 64b39b4335b4dfd7dea6e084c0e09f6e655395b5
               toggleSharingAllThumbsCheckResults={this.props.toggleSharingAllThumbsCheckResults} logout={this.props.logout}/> 
=======
               toggleSharingAllThumbsCheckResults={this.props.toggleSharingAllThumbsCheckResults} />
>>>>>>> Cookies are bening encoded, educatorID is being read in the front end
          <EditPresentation {...this.props} />
        </div>
      )
    } else if (this.props.editingQuestion) {
     return <CreateEditQuestions {...this.props} />
    } else {
      return (
        <div>
          <Navbar lowerStudentHand={this.props.lowerStudentHand}
               questions={this.props.questions} toggleTakingQuestions={this.props.toggleTakingQuestions}
               sharingAllThumbsCheckResults={this.props.sharingAllThumbsCheckResults} takingQuestions={this.props.takingQuestions}
<<<<<<< 64b39b4335b4dfd7dea6e084c0e09f6e655395b5
               toggleSharingAllThumbsCheckResults={this.props.toggleSharingAllThumbsCheckResults} logout={this.props.logout}/>  
=======
               toggleSharingAllThumbsCheckResults={this.props.toggleSharingAllThumbsCheckResults} />
>>>>>>> Cookies are bening encoded, educatorID is being read in the front end
          <h1>Welcome! You have reached the exclusive members page!</h1>
          <PresentationList {...this.props}/>
        </div>
      );
    }
  }
});

