import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="answered-waiting waiting-text">
      {this.props.sharingAllThumbsCheckResults || this.props.shareThumbsCheckResults ? null : <div>Thanks for your response! Please wait for the next prompt.</div>}
    </div>;
  }
});
