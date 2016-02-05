import React from 'react';
import {connect} from 'react-redux';
import {toJS} from 'immutable';
import PresentationList from './PresentationList';
import {Educator} from '../educator/EducatorMain';
import EditPresentation from './EditPresentation';
export default React.createClass({
  render: function() {
    if (this.props.preplannedPresentation) {
      return <Educator {...this.props} />
    } else if (true || this.props.editingPresentation) {
      return <EditPresentation {...this.props} />
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
