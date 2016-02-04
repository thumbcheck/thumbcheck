import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  removeQuestion: function(target) {
  	this.props.lowerStudentHand(id);
  },

  showQuestions: function() {
  	var that = this;
  	function removeQuestion() {
  		that.props.lowerStudentHand(this);
  	}
  	if (this.props.questions) {
	  	let questions = this.props.questions.toJS();
	  	return questions.map(function(tuple, index) {
	    	return <li className="questions-list">{tuple[1]}<span className="remove-icon remove-right" onClick={removeQuestion.bind((tuple[0]))} aria-hidden="true"><img className="remove-icon" src="/images/icons/remove.png"/></span></li>
	  	});   
	  } else {
	  	return <li className="questions-list">No questions currently</li>
	  } 
  },
  showBubble: function(length) {
  	if (length) {
  		if (this.props.questions) {
  			return this.props.questions.size;
  		}
  	} else {
  		if (this.props.questions && this.props.questions.size > 0) return "noti_bubble";
  		else return "dont-show";
  	}
  	return null;  		
  },
  render: function() {  	
    return ( 
    	<nav className="navbar navbar-default">
			  <div className="container-fluid blue">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a href="/"><span className="logo-name navbar-brand white-text">Thumbscheck.r</span></a>

			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

			      <ul className="nav navbar-nav navbar-right">
			        <li className="dropdown">
			          <a href="#" className="dropdown-toggle white-text right-nav" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
			          	<img data-placement="bottom" title="See raised hands" src="/images/raise_hand1.png" className="raise-hand-icon" />
			          	<div className={this.showBubble()} ><span className="">{ this.showBubble('length')} </span> </div>
			          	<span className="caret"></span>
			          </a>
			          <ul className="dropdown-menu drop-down-spacing">
			            { this.showQuestions() }
			          </ul>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
		)
  }
});