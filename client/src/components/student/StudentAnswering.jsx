import React from 'react';
import checkHasVoted from '../../helpers/checkHasVoted';
import renderCorrectStudentInput from '../../helpers/renderCorrectStudentInput';
import StudentQuestionInformation from '../loggedin/StudentQuestionInformation';

export default React.createClass({
  render: function() {    
    return (
      <div className="answering">
        {this.props.preplannedPresentation ? <StudentQuestionInformation {...this.props} /> : null}
        {renderCorrectStudentInput(this.props)}
      </div>
    );
  }
});
