import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({  
  render: function() {
  	
    return (    	
    	<div className="slider-container">
	      <input id="mySlider" className="question-slider"
	      type="range"
	      value={this.props.value}
	      min={this.props.min}
	      max={this.props.max}
	      onInput={this.props.handleChange}
	      step={this.props.step} />

	      <div className="orange-text"><span>Thumbs check</span> <span>Multiple Choice</span> <span>Free Response</span></div>
      </div>

    );
  }
})
