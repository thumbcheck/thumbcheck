import React from 'react';

export default React.createClass({
  render: function() {
    console.log('In App.jsx', this.props.children);
    return this.props.children;
  }
});
