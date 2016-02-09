import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  createNewPresentationTitle: function() {
    let presentationTitle = this.presentationTitle;
    this.props.addPresentation({title:presentationTitle, educator_id: this.props.educatorID});
  },
  handlePresentationTitleChange: function(e) {
    this.presentationTitle = e.target.value;
  },
  render: function() {
    return (
      <div>
        <h3>Add your title here!</h3>
        <input type="text" name="presentationTitle" placeholder='' onChange={this.handlePresentationTitleChange} />
        <button onClick={this.createNewPresentationTitle}>Add Presentation Title</button>
      </div>
    )
  }
});
