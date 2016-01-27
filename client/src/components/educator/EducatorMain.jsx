import React from 'react';
import {connect} from 'react-redux';
import EducatorRequestCheckin from './EducatorRequestCheckin';
import ResultsDisplay from './ResultsDisplay';
// import Navbar from './NavBarEducator';
import * as actionCreators from '../../action_creators';

export const Educator = React.createClass({
  render: function() {
  console.log("Ed const PROPS:", this.props);
    return (
      <div>
        {this.props.voting ?
          <ResultsDisplay ref="resultsDisplay" {...this.props} /> :
          <EducatorRequestCheckin {...this.props} />}
      </div>
    )
  }
});
    	// render the navbar
    	// <Navbar />
    	
    	// render whatever other view it's currently on

function mapStateToProps(state) {
  console.log("edMain state", state.getIn(['tally', 'thumbsUp']));
  return {
    voting: state.get('voting'),
    upCount: state.getIn(['tally', 'thumbsUp']),
    downCount: state.getIn(['tally', 'thumbsDown'])
  };
}

export const EducatorContainer = connect(
  mapStateToProps,
  actionCreators
)(Educator);
