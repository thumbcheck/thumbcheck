import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({  
  render: function() {
  	
    return (    	
    	<div className="slider-container">
	      <input id="mySlider" className="question-slider"
	      type="range"
	      defaultValue={this.props.defaultValue}	        
	      min={this.props.min}
	      max={this.props.max}
	      onInput={this.props.handleChange}
	      step={this.props.step} />

	      <div className="orange-text">
	      	<div className="inlineD">Thumbs <br /> check</div> 
	      	<div className="inlineD">Multiple <br />Choice</div> 
	      	<div className="inlineD">Free <br /> Response</div>
	      </div>
      </div>
    );
  }
})
