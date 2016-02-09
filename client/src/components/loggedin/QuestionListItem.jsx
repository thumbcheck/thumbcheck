import React from 'react';
export default React.createClass({
  deleteQuestion: function() {
  	const id = this.props.id;
  	this.props.deleteQuestion(id);
  },
  editQuestion: function(){
  	// call the create question page with this question's info
  	this.props.createQuestion(true, this.props.dataForQuestion);
  },
  render: function() {
  	// console.log('question page', this.props);
    return (
      <div>
        {this.props.title}
        <span className="pull-right">
        	<button onClick={ this.editQuestion } >EDIT</button>
        	<span className="remove-icon" onClick={ this.deleteQuestion } aria-hidden="true"><img className="remove-icon" src="/images/icons/remove.png"/></span>        	
       	</span>
      </div>
    );
  }
});
