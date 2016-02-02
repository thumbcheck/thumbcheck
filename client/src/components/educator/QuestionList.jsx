import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
  render: function() {
    console.log("QuestionList--this.props.questions:", this.props.questions);
    return (
      <div>
        {this.props.questions._tail ?
          <div>
            <h3>{this.props.questions._tail.array.length} student(s) with questions</h3>
            <div>{this.props.questions}</div>
          </div> :
          null
        }
      </div>
    );
  }
})
