import {Map, fromJS, toJS, List} from 'immutable';
import underscore from 'underscore';

export function setState(state, newState) {
  return state.merge(newState);
}
export function setInitialState(state) {
  // 
  let intialState = {
    prevQuestionType: false,
    sharingAllThumbsCheckResults: false
  };
  window.location.assign('/');
  return fromJS(intialState);
}

export function chooseRole(state, choice) {
  return state.set('choice', choice);
}

export function setErrorMessage(state, error) {
  let newState = fromJS({
  	errMessage: error
  });
  console.log('new', newState);
  return state.merge(newState);
}

export function addStudentIdentity(state, id, name) {
  const newState = fromJS({
    id: id,
    name: name,
  });
  return state.merge(newState);
}
