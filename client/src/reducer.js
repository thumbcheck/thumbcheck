import {Map, fromJS, toJS, List} from 'immutable';
import underscore from 'underscore';

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

function addQuestion(state, id, name, alreadyAsked) {
  const studentId = id;
  // if the student's hand is already up, remove it from question queue
  if (alreadyAsked) {
    let questions = state.get('questions');
    questions = questions.filter(function(tuple) {
      return tuple[0] !== id
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

function addStudentIdentity(state, id, name) {  
  const newState = fromJS({
    id: id,
    name: name,
  });
  return state.merge(newState);
}

function chooseRole(state, choice) {
  return state.set('choice', choice);
}

function joinRoom(state, roomName) {
  const newState = fromJS({
    roomName: roomName
  });
  window.localStorage.setItem('state', state);
  return state.merge(newState);
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
  case 'ADD_QUESTION':
    return addQuestion(state, action.id, action.name, action.alreadyAsked);
  case 'TOGGLE_HAND_RAISE':
    return toggleHandRaise(state);
  case 'ADD_STUDENT_ID_TO_CLIENT':
    return addStudentIdentity(state, action.id, action.name);
  case 'CHOOSE_ROLE':
    return chooseRole(state, action.choice);
  case 'JOIN_ROOM':
    return joinRoom(state, action.roomName);
  }
  return state;
}
