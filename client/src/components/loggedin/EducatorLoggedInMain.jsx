import React from 'react';
import {connect} from 'react-redux';
import {toJS} from 'immutable';
import PresentationList from './PresentationList';
import {Educator} from '../educator/EducatorMain';
import EditPresentation from './EditPresentation';
import Navbar from '../educator/NavBarEducator';
import CreateEditQuestions from './CreateEditQuestions';

export default React.createClass({
  componentDidMount: function() {
    this.props.educatorLogin();
  },

  renderProperElement: function() {
    if (this.props.preplannedPresentation) {
      return <Educator {...this.props} />
    } else if (this.props.editingOrCreatingPresentation) {
      return (
        <div>
          <Navbar {...this.props} />
          <div className="preplanned-container">
            <EditPresentation {...this.props} />
          </div>
        </div>
      )
    } else if (this.props.editingQuestion) {
     return <CreateEditQuestions {...this.props} />
    } else {
      return (
        <div>
          <Navbar {...this.props} />
          <div className="preplanned-container">
            <PresentationList {...this.props}/>
            {/*<div><strong>{this.props.numUsers}</strong> device(s) currently in this room</div>*/}
          </div>
        </div>
      );
    }

  },
  render: function() {
    console.log('EDUCATOR ID', this.props.educatorID);
    return (
      <div className="">
        { this.renderProperElement() }
      </div>
    )
  }
});

