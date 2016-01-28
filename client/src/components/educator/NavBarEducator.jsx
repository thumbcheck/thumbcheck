import React from 'react';

export default React.createClass({
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
			      <span className="logo-name navbar-brand white-text">Thumbscheck.r</span>
			      
			    </div>
			    
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">			      
			      
			      <ul className="nav navbar-nav navbar-right">			        
			        <li className="dropdown">
			          <a href="#" className="dropdown-toggle white-text" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >Options<span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li><a href="#">Action</a></li>
			            <li><a href="#">Another action</a></li>
			            <li><a href="#">Something else here</a></li>
			            <li role="separator" className="divider"></li>
			            <li><a href="#">Log out</a></li>
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