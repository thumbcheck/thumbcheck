import React from 'react';
import {connect} from 'react-redux';
import {Student} from './student/StudentMain';
import {Educator} from './educator/EducatorMain';
import Navbar from './educator/NavBarEducator';
import * as actionCreators from '../action_creators';
import PrivateBrowsingPage from './PrivateBrowsingPage';
import RoleChoice from './RoleChoice';
import EducatorLoggedInMain from './loggedin/EducatorLoggedInMain';
import mapStateToProps from '../helpers/mapStateToProps';

export const Main = React.createClass({
  canWriteLocalStorage: function() {
    try {
      localStorage.setItem('a', 'a');
      localStorage.removeItem('a');
      return true;
    } catch (exception) {
      return false;
    }
  },

  getCookie: function(name) {
    var regexp = new RegExp("(?:^" + name + "|;\s*"+ name + ")=(.*?)(?:;|$)", "g");
    var result = regexp.exec(document.cookie);
    return (result === null) ? null : result[1];
  },

 /*** NEED TO REFACTOR LOCAL STORAGE ITEMS ***/
  render: function() {
    let isLoggedIn = this.getCookie('remember');

    if (this.canWriteLocalStorage()) {
      if (this.props.userType === 'student') {
        return (<Student {...this.props} />)
      } else if(this.props.userType === 'educator' && isLoggedIn) {
        return <EducatorLoggedInMain {...this.props} />
      } else if (this.props.userType === 'educator') {
        return <Educator {...this.props} />
      } else {
        return (
          <div className="jumbotron main-landing-parent-container">
          <div className="dont-show-small-screen">Thumbcheck.me</div>
          <div className="main-landing-title-bar">
            <div className="main-landing-container center-text">
            <h1 className="jumbo-text">Welcome to Thumbcheck</h1>
            <div className="subtitle subtitle-text">
            <i> Know your audience with a tap of a button</i>
            </div>
                <div className="center-text main-landing-content">
                  <RoleChoice chooseRole={this.props.chooseRole}
                              setError={this.props.setError}
                              errMessage={this.props.errMessage}
                              choice={this.props.choice}
                              educatorLogin={this.props.educatorLogin}
                              educatorLoggedIn={this.props.educatorLoggedIn} />
                  </div>
            </div>
            </div>
          </div>
        );
      }
    } else {
      return <PrivateBrowsingPage />;
    }
  }
});

export const MainLandingContainer = connect(mapStateToProps, actionCreators)(Main);
