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
    return (
      <div className="create-presentation-container">
        <div className="bigger-text push-bottom">Name Your Presentation</div>
        <input className="push-right big-text big-input" type="text" name="presentationTitle" placeholder='' ref={(ref) => this.presentationInput = ref} onKeyDown ={this.handleEnter}  />
        <button className="btn orange white-text push-right big-text align-up" onClick={this.handleSubmit} >Create</button>
        <img className="next-icon align-up" src="/images/icons/cancel_icon1.png" onClick={ this.props.createOrEditPresentation }/><br /> 
        {/*<button className="btn orange white-text" onClick={ this.props.createOrEditPresentation }>Go back</button> */}
      </div>
    )
  }
});
