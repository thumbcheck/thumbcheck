import React from 'react';
import checkHasVoted from '../../helpers/checkHasVoted';
import renderCorrectStudentInput from '../../helpers/renderCorrectStudentInput';

export default React.createClass({
  render: function() {
    console.log('question type in student', this.props.questionType);
    return (
      <div className="answering">
        {renderCorrectStudentInput(this.props)}
      </div>
    );
  }
});
