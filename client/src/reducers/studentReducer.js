import {Map, fromJS, toJS, List} from 'immutable';
import underscore from 'underscore';

function vote(state, participantID) {
  let haveVoted = state.getIn(['tally', 'haveVoted']) || [];
  haveVoted = haveVoted.push(participantID);
  return state.mergeIn(['tally', 'haveVoted'], haveVoted);
}

function upVote(state) {
  return state.updateIn(
      ['tally', 'thumbsUp'],
      0,
      thumbsUp => thumbsUp + 1
  );
}

function downVote(state) {
  return state.updateIn(
      ['tally', 'thumbsDown'],
      0,
      thumbsDown => thumbsDown + 1
  );
}

function multipleChoiceAnswer(state, answer) {
  return state.updateIn(
      ['tally', answer],
      0,
      answer => answer + 1
  );
}

function openResponse(state, answer) {
  let answers = state.getIn(['tally', 'answers']) || [];
  answers = answers.push(answer);
  return state.mergeIn(['tally', 'answers'], answers);
}


function toggleHandRaise(state) {
  if (state.get('handRaised')) {
    return state.set('handRaised', false);
  } else {
    return state.set('handRaised', true);
  }
}

export default function(state = fromJS({}), action) {
  switch (action.type) {
  case 'VOTE':
    return vote(state, action.participantID);
  case 'UPVOTE':
    return upVote(state);
  case 'DOWNVOTE':
    return downVote(state);
  case 'MULTIPLE_CHOICE_ANSWER':
    return multipleChoiceAnswer(state, action.answer);
  case 'OPEN_RESPONSE':
    return openResponse(state, action.answer);
  case 'TOGGLE_HAND_RAISE':
    return toggleHandRaise(state);
  }
  return state;
}
