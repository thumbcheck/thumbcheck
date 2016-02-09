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
    if (this.props.preplannedPresentation) {
      return <Educator {...this.props} />
    } else if (this.props.editingOrCreatingPresentation) {
      return (
        <div>
          <Navbar lowerStudentHand={this.props.lowerStudentHand}
               questions={this.props.questions} toggleTakingQuestions={this.props.toggleTakingQuestions}
               sharingAllThumbsCheckResults={this.props.sharingAllThumbsCheckResults} takingQuestions={this.props.takingQuestions}
               toggleSharingAllThumbsCheckResults={this.props.toggleSharingAllThumbsCheckResults} /> 
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
               toggleSharingAllThumbsCheckResults={this.props.toggleSharingAllThumbsCheckResults} />  
          <h1>Welcome! You have reached the exclusive members page!</h1>
          <PresentationList {...this.props}/>
        </div>
      );
    }
  }
});
 
