import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div>
        <div className='play-container'></div>
        <div
                className = "end-pres-btn big-text-vh"
                onClick = {this.props.endPreplannedPresentation}>
                <span className="next-question-text dont-show-small-screen-800 big-text-vh">End Presentation</span>
                <img className="next-icon" src="/images/icons/cancel_icon1.png"/>

        </div>
      </div>
    );
  }
});
