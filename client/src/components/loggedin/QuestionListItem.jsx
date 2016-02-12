import React from 'react';
export default React.createClass({
  deleteQuestion: function() {
  	const id = this.props.id;
  	this.props.deleteQuestion(id, this.props.currentPresentationID);
  },
  editQuestion: function(){
  	// call the create question page with this question's info
  	this.props.createQuestion(true, this.props.dataForQuestion);
  },
  render: function() {
    return (
      <tr className='row table-list-row'>
        <td className='col-md-12 col-xs-12' >
          {this.props.title}
        </td>
        <td className='table-list-item-container' onClick={ this.editQuestion }>
          <span className='hidden-small-screen'>Edit</span>
          <img className="table-list-item-button" src="/images/editbutton.ico" />
        </td>
        <td className="table-list-item-delete"  onClick={ this.deleteQuestion } aria-hidden="true">
          <img className="remove-icon" src="/images/icons/remove.png"/>
        </td>
      </tr> 
    );
  }
});

      // {<div>
      //   {this.props.title}
      //   <span className="pull-right">
      //     <button onClick={ this.editQuestion } >EDIT</button>
      //     <span className="remove-icon" onClick={ this.deleteQuestion } aria-hidden="true"><img className="remove-icon" src="/images/icons/remove.png"/></span>         
      //   </span>
      // </div>}
