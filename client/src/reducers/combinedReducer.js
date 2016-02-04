import {Map, fromJS, toJS, List} from 'immutable';
import underscore from 'underscore';

function setState(state, newState) {
  return state.merge(newState);
}


function addQuestion(state, id, name, alreadyAsked) {
  const studentId = id;
  // if the student's hand is already up, remove it from question queue
  if (alreadyAsked) {
    let questions = state.get('questions');
    questions = questions.filter(function(tuple) {
      if (tuple[0] === id)
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

function addStudentIdentity(state, id, name) {
  const newState = fromJS({
    id: id,
    name: name,
  });
  return state.merge(newState);
}

function chooseRole(state, choice) {
  console.log('i feel like this is not working', choice)
  let stateset = state.set('choice', choice);
  console.log(stateset.toJS());
  return state.set('choice', choice);
}

function setErrorMessage(state, error) {
  return state.set('errMessage', error);
}

export default function(state = fromJS({}), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'SET_PARTICIPANT_ID':
    return state.set('participantID', action.participantID);
  case 'ADD_QUESTION':
    return addQuestion(state, action.id, action.name, action.alreadyAsked);
  case 'ADD_STUDENT_ID_TO_CLIENT':
    return addStudentIdentity(state, action.id, action.name);
  case 'CHOOSE_ROLE':
    return chooseRole(state, action.choice);
  case 'SET_ERROR':
    return setErrorMessage(state, action.errMessage);
  case 'LOWER_STUDENT_HAND':
    return addQuestion(state, action.id, action.name, true);
  case 'SET_NUMUSERS':
    return state.set('numUsers', action.numUsers);
  }
  return state;
}
