import React from 'react';

export default React.createClass({
  handleOpenSubmit: function() {
    this.props.openResponse(this.studentOpenResponse.value.toLowerCase());
    this.props.vote(window.localStorage.getItem('participantID'));
  },

  handleEnter: function (e){
    if (e.keyCode == 13){
      this.handleOpenSubmit(e);
    }
  },

  render: function() {
    return (
      <div>
        <p>Enter your answer <input ref={(ref) => this.studentOpenResponse = ref} onKeyDown ={this.handleEnter} /> </p>
        <p><a className="btn request-btn blue white-text" role="button" onClick={this.handleOpenSubmit} >Submit</a></p>
      </div>
      )
  }
});
