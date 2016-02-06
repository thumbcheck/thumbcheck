import React from 'react';
import {connect} from 'react-redux';
import {toJS} from 'immutable';
import PresentationList from './PresentationList';
import {Educator} from '../educator/EducatorMain';
import EditPresentation from './EditPresentation';
import Navbar from '../educator/NavBarEducator';
import CreateEditQuestions from './CreateEditQuestions';

export default React.createClass({
  render: function() {
    if (false && this.props.preplannedPresentation) {
      return <Educator {...this.props} />
    } else if (false && this.props.editingPresentation) {
      return (
        <div>
          <Navbar lowerStudentHand={this.props.lowerStudentHand}
          questions={this.props.questions} /> 
          <EditPresentation {...this.props} />
        </div>
      )
    } else if (true || this.props.editingQuestion) {
     return <CreateEditQuestions {...this.props} />
    } else {
      return (
        <div>
          <Navbar lowerStudentHand={this.props.lowerStudentHand}
          questions={this.props.questions} />  
          <h1>Welcome! You have reached the exclusive members page!</h1>
          <PresentationList {...this.props}/>
        </div>
      );
    }
  }
});
 
