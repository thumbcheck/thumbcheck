import {Map, fromJS} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state) {
  if (window) {
    window.localStorage.setItem('hasVoted', true);
  }
  return state.set('hasVoted', true);
}

function upVote(state) {
  if (state.get('hasVoted') !== true) {
    return state.updateIn(
      ['tally', 'thumbsUp'],
      0,
      thumbsUp => thumbsUp + 1
    );
  } else {
    return state;
  }
}

function downVote(state) {
  if (state.get('hasVoted') !== true) {
    return state.updateIn(
      ['tally', 'thumbsDown'],
      0,
      thumbsDown => thumbsDown + 1
    );
  } else {
    return state;
  }
}

function stopVote(state) {
  const newState = fromJS({voting: false, hasVoted: false});
  if (window) {
    window.localStorage.setItem('hasVoted', false);
  }
  return state.merge(newState);
}

function startVote(state) {
  if (window) {
    window.localStorage.setItem('hasVoted', false);
  }
  const newState = fromJS({
    voting: true,    
    showgraph: "1",
    tally: {
      thumbsUp : 0,
      thumbsDown: 0
    }
  });
  console.log('new', newState);
  return state.merge(newState);
}

function toggleTakingQuestions(state) {

  // Take care of takingQuestions is undefined case
  let currentTakingQuestions = state.get('takingQuestions');
  if (currentTakingQuestions) {
    currentTakingQuestions = state.getIn(['takingQuestions', 'allowQuestions']);
  }
  if (currentTakingQuestions) {
    return state.merge(fromJS({
      takingQuestions: {
        allowQuestions: false,
        buttonClass: 'btn btn-success request-btn white-text',
        buttonText: 'Allow Questions'
      }
    }));
  } else {
    return state.merge(fromJS({
      takingQuestions: {
        allowQuestions: true,
        buttonClass: 'btn btn-danger request-btn white-text',
        buttonText: 'End Allow Questions'
      }
    }));
  }
}


export default function(state = fromJS({}), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'VOTE':
    return vote(state);
  case 'UPVOTE':
    return upVote(state);
  case 'DOWNVOTE':
    return downVote(state);
  case 'STOP_VOTE':
    return stopVote(state);
  case 'START_VOTE':
    return startVote(state);
  case 'TAKING_QUESTIONS':
    return toggleTakingQuestions(state);
  }
  return state;
}
