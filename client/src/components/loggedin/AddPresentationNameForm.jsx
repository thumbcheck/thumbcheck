import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  addNewPresentation: function() {
    let presentationTitle = this.presentationTitle;
    if(this.props.currentPresentation.toJS().presentation.id) {
      // make a PUT request with id
    } else {
      // make a POST request
      this.props.addPresentation({title:presentationTitle, owner_id: this.props.educatorID});
    }
  },
  handlePresentationTitleChange: function(e) {
    this.presentationTitle = e.target.value;
  },
  render: function() {
    return (
      <div>
        <form>
          <h3>Add your title here!</h3>
          <input type="text" name="presentationTitle" placeholder='' onChange={this.handlePresentationTitleChange} />
          <button onClick={this.addNewPresentation}>Add Presentation Title</button>
        </form>
      </div>
    )
  }
});
