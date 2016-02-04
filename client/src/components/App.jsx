import React from 'react';

export default React.createClass({
  render: function() {
    console.log(this.props.children, 'in app.jsx');
    return this.props.children;
  }
});
