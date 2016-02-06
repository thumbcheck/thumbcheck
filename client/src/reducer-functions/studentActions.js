import {Map, fromJS, toJS, List} from 'immutable';
import underscore from 'underscore';

export function vote(state, participantID) {
  let haveVoted = state.getIn(['tally', 'haveVoted']) || [];
  haveVoted = haveVoted.push(participantID);
  return state.mergeIn(['tally', 'haveVoted'], haveVoted);
}

export function upVote(state) {
  return state.updateIn(
      ['tally', 'thumbsUp'],
      0,
      thumbsUp => thumbsUp + 1
  );
}

export function downVote(state) {
  return state.updateIn(
      ['tally', 'thumbsDown'],
      0,
      thumbsDown => thumbsDown + 1
  );
}

export function openResponse(state, answer) {
  let answers = state.getIn(['tally', 'answers']) || [];
  answers = answers.push(answer);
  return state.mergeIn(['tally', 'answers'], answers);
}

export function multipleChoiceAnswer(state, answer) {
  return state.updateIn(
      ['tally', answer],
      0,
      answer => answer + 1
  );
}

export function addQuestion(state, id, name, alreadyAsked) {
  const studentId = id;
  // if the student's hand is already up, remove it from question queue
  if (alreadyAsked) {
    let questions = state.get('questions');
    questions = questions.filter(function(tuple) {
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

export function toggleHandRaise(state) {
  if (state.get('handRaised')) {
    return state.set('handRaised', false);
  } else {
    return state.set('handRaised', true);
  }
}

