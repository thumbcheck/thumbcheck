import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    const inputValue = this.presentationInput.value;
    this.props.addPresentation({title:inputValue, educator_id: this.props.educatorID});
  },

  handleEnter: function (e){
    if (e.keyCode == 13){
      this.handleSubmit(e);
    }
  },

  render: function() {
    console.log('add pres page', this.props);
    return (
      <div>
        <h3>Presentation Title:</h3>
        <input type="text" name="presentationTitle" placeholder='' ref={(ref) => this.presentationInput = ref} onKeyDown ={this.handleEnter}  />
        <button className="btn grey white-text" onClick={this.handleSubmit} >Submit</button>
        <button className="btn light-grey white-text" onClick={ this.props.createOrEditPresentation }>Cancel</button>
      </div>
    )
  }
});
