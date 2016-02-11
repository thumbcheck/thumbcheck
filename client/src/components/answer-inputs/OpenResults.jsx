import React from 'react';

export default React.createClass({
  handleOpenSubmit: function() {
    this.props.openResponse(this.studentOpenResponse.value.toLowerCase());
    this.props.vote(window.localStorage.getItem('participantID'));
  },

  render: function() {
    return (
      <div>
        <p>Enter your answer <input ref={(ref) => this.studentOpenResponse = ref} /> </p>
        <p><a className="btn blue white-text" role="button" onClick={this.handleOpenSubmit} >Submit</a></p>
      </div>
      )
  }
});
