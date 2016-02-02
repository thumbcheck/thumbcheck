import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  showQuestions: function() {  	
  	if (this.props.questions) {
	  	let questions = this.props.questions.toJS();  
	  	return questions.map(function(tuple, index) {
	  		//glyphicon glyphicon-remove
	    	return <li className="questions-list">{tuple[1]}<span className=" remove-icon" aria-hidden="true">X</span></li>
	  	});   
	  } 
  },
  render: function() {
  	console.log('navvar probs', this.props);
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
			          <a href="#" className="dropdown-toggle white-text right-nav" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" ><img src="/images/raise_hand1.png" className="raise-hand-icon" /><span className="caret"></span></a>
			          <ul className="dropdown-menu">
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

// <!-- <img className="brand-image" alt="brand" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg"/> -->