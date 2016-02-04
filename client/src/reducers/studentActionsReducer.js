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

function openResponse(state, answer) {
  let answers = state.getIn(['tally', 'answers']) || [];
  answers = answers.push(answer);
  return state.mergeIn(['tally', 'answers'], answers);
}

function multipleChoiceAnswer(state, answer) {
  return state.updateIn(
      ['tally', answer],
      0,
      answer => answer + 1
  );
}

function addQuestion(state, id, name, alreadyAsked) {
  const studentId = id;
  // if the student's hand is already up, remove it from question queue
  if (alreadyAsked) {
    let questions = state.get('questions');
    questions = questions.filter(function(tuple) {
      if (tuple[0] === id)
      return tuple[0] !== id;
    });
    let newState = fromJS({questions: questions});
    return state.merge(newState);

  } else {
    let questions = state.get('questions') || fromJS([]);
    questions = questions.push([id, name]);
    let newState = fromJS({questions: questions});
    return state.merge(newState);
  }
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
  case 'ADD_QUESTION':
    return addQuestion(state, action.id, action.name, action.alreadyAsked);
  case 'TOGGLE_HAND_RAISE':
    return toggleHandRaise(state);
  }
  return state;
}
