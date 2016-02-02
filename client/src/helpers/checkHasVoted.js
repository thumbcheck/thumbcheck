import immutable from 'immutable';

export default function(haveVotedArray, id) {
  let hasVoted = false;
  haveVotedArray.forEach(function(participantID) {
    if (participantID === id) {
      hasVoted = true;
    }
  });

  return hasVoted;
}
