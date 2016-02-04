import {Map, fromJS, toJS, List} from 'immutable';
import underscore from 'underscore';

function setState(state, newState) {
  return state.merge(newState);
}

function chooseRole(state, choice) {
  return state.set('choice', choice);
}

function setErrorMessage(state, error) {
  return state.set('errMessage', error);
}

function addStudentIdentity(state, id, name) {
  const newState = fromJS({
    id: id,
    name: name,
  });
  return state.merge(newState);
}

export default function(state = fromJS({}), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'SET_PARTICIPANT_ID':
    return state.set('participantID', action.participantID);
  case 'CHOOSE_ROLE':
    return chooseRole(state, action.choice);
  case 'ADD_STUDENT_ID_TO_CLIENT':
    return addStudentIdentity(state, action.id, action.name);
  case 'SET_ERROR':
    return setErrorMessage(state, action.errMessage);
  case 'SET_NUMUSERS':
    return state.set('numUsers', action.numUsers);
  }
  return state;
}
