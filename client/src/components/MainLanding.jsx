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
 /*** NEED TO REFACTOR LOCAL STORAGE ITEMS ***/
  render: function() {
    if (this.canWriteLocalStorage()) {
      if (this.props.userType === 'student') {
        return (<Student {...this.props} />)
      } else if(this.props.userType === 'educator' && this.props.educatorLoggedIn) {
        return <EducatorLoggedInMain {...this.props} />
      } else if (this.props.userType === 'educator') {
        return <Educator {...this.props} />
      } else {
        return (
          <div className="main-landing-parent-container">
            <div className="main-landing-container center-text">
                <div className="jumbotron center-text main-landing-content">
                  <h1 className="jumbo-text">Welcome to Thumbscheck</h1>                
                  <RoleChoice chooseRole={this.props.chooseRole} 
                              setError={this.props.setError}
                              errMessage={this.props.errMessage}
                              choice={this.props.choice} />
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
