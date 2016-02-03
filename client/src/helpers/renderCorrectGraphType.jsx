import React from 'react';
import BinaryThumbsGraph from '../components/results-graphs/BinaryThumbs';
import MultipleChoice3Graph from '../components/results-graphs/MultipleChoice3';



export default function(properties) {
  if(properties.questionType === 'thumbs') {
    return <BinaryThumbsGraph ref='resultsDisplay' lastOrCurrent='last-result-graph' {...properties} />;
  } else if(properties.questionType === 'multipleChoice3') {
    return <MultipleChoice3Graph ref="resultsDisplay" lastOrCurrent="last-result-graph" {...properties} />;
  } else if(properties.questionType === 'multipleChoice4') {
    return <MultipleChoice4Graph ref="resultsDisplay" lastOrCurrent="last-result-graph" {...properties} />;
  } else if(properties.questionType === 'multipleChoice5') {
    return <MultipleChoice5Graph ref="resultsDisplay" lastOrCurrent="last-result-graph" {...properties} />;
  } else {
    return null;
  }
};
