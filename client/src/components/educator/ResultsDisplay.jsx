import React from 'react';
import QuestionButton from './QuestionButton';
import renderCorrectGraphType from '../../helpers/renderCorrectGraphType';
import EducatorQuestionInformation from '../loggedin/EducatorQuestionInformation';

export default React.createClass({
  
  render: function() {    
    return (
      <div className="results-container">

        {this.props.preplannedPresentation ? <EducatorQuestionInformation {...this.props}/> : null}
        { renderCorrectGraphType(this.props) } 

        <button className="btn orange request-btn white-text end-thumb-check" onClick={this.props.stopVote}>
          END VOTE
        </button>
        <QuestionButton takingQuestions={this.props.takingQuestions}
                        toggleTakingQuestions={this.props.toggleTakingQuestions} />
      </div>
    );    
  }
});
