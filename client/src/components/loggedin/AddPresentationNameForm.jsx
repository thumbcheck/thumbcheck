import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  createNewPresentationTitle: function() {
    let presentationTitle = this.presentationTitle;
    console.log('in add presentaiton name form2');
    console.log(this.props.educatorID, 'in addprsentation name form');
    this.props.addPresentation({title:presentationTitle, educator_id: this.props.educatorID});
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
          <button onClick={this.createNewPresentationTitle}>Add Presentation Title</button>
        </form>
      </div>
    )
  }
});
