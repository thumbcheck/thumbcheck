import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
 renderOpenResults: function() {
   let answers = [];

   if(this.props.openResponseAnswers === undefined){
     answers = [];
   } else {
     answers = this.props.openResponseAnswers.toJS();
   }

   console.log('MY ANSWERS!', answers);
   return answers.map(function(answer, index) {
     return <div className="bigger-text">{ answer } </div>
   });
 },

 render: function() {
   return (
     <div>
       { this.renderOpenResults() }
     </div>
   )
 }
});
