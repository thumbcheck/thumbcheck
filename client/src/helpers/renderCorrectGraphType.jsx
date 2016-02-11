import React from 'react';
import BinaryThumbsGraph from '../components/results-graphs/BinaryThumbs';
import MultipleChoice3Graph from '../components/results-graphs/MultipleChoice3';
import MultipleChoice4Graph from '../components/results-graphs/MultipleChoice4';
import MultipleChoice5Graph from '../components/results-graphs/MultipleChoice5';
import OpenResults from '../components/results-graphs/OpenResults';


export default function(properties) {
  let lastCurrent = properties.voting ? "current-result-graph" : "last-result-graph";

  if (properties.prevQuestionType) {properties.questionType === false;}
  if(properties.questionType === 'thumbs' || properties.prevQuestionType === 'thumbs') {    
    return <BinaryThumbsGraph ref='resultsDisplay' lastOrCurrent={lastCurrent} {...properties} />;
  } else if(properties.questionType === 'multipleChoice3' || properties.prevQuestionType === 'multipleChoice3') {
    return <MultipleChoice3Graph ref="resultsDisplay" lastOrCurrent={lastCurrent} {...properties} />;
  } else if(properties.questionType === 'multipleChoice4' || properties.prevQuestionType === 'multipleChoice4') {
    return <MultipleChoice4Graph ref="resultsDisplay" lastOrCurrent={lastCurrent} {...properties} />;
  } else if(properties.questionType === 'multipleChoice5' || properties.prevQuestionType === 'multipleChoice5') {
    return <MultipleChoice5Graph ref="resultsDisplay" lastOrCurrent={lastCurrent} {...properties} />;
  } else if(properties.questionType === 'open') {
    return <OpenResults {...properties} />;
  } else {
    return null;
  }
};
