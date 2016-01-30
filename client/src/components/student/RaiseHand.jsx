import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  render: function() {
    return (
      <div>
        <button type='button' 
                onClick={this.props.toggleHandRaise} >
                {this.props.handRaised ? 'Lower Hand' : 'Raise Hand'}
        </button>
          {this.props.handRaised ?
            <form onsubmit={this.props.confirmHandRaise} >
              <input type="text" placeholder="Your name" />
              <input type="submit" value="Confirm Hand Raise" />
            </form> :
            null
          }
      </div>
    );
  }
})
