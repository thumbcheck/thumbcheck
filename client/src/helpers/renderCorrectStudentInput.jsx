import React from 'react';
import ThumbsCheck from '../components/answer-inputs/ThumbsCheck';
import MultipleChoice from '../components/answer-inputs/MultipleChoice';
import OpenResults from '../components/answer-inputs/OpenResults';



export default function(properties) {
  if(properties.questionType === 'thumbs') {
    return <ThumbsCheck {...properties} />;
  } else if(properties.questionType === 'multipleChoice3' || properties.questionType === 'multipleChoice4' || properties.questionType === 'multipleChoice5') {
    return <MultipleChoice  {...properties} />;
  } else if(properties.questionType === 'open') {
    return <OpenResults {...properties} />;
  } else {
    return null;
  }
};
