import React from 'react';
import {connect} from 'react-redux';
import {toJS} from 'immutable';
import PresentationList from './PresentationList';
import {Educator} from '../educator/EducatorMain';
import EditPresentation from './EditPresentation';
import Navbar from '../educator/NavBarEducator';
export default React.createClass({
  render: function() {
    if (this.props.preplannedPresentation) {
      return <Educator {...this.props} />
    } else if (true || this.props.editingPresentation) {
      return (
        <div>
          <Navbar lowerStudentHand={this.props.lowerStudentHand}
          questions={this.props.questions} /> 
          <EditPresentation {...this.props} />
        </div>
      )
    } else {
      return (
        <div>
          <h1>Welcome! You have reached the exclusive members page!</h1>
          <PresentationList />
        </div>
      )
    }
  }
});
