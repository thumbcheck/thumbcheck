import {Map, fromJS, toJS, List} from 'immutable';

export function addPresentation(state) {
  return state;
}

export function setAllPresentations(state, data) {
  console.log('settingpresentaion', data);
  let presentations = fromJS(data);
  let newState = {allEducatorPresentations: presentations};
  return state.merge(newState);
}
