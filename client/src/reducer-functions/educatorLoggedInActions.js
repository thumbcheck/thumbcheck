import {Map, fromJS, toJS, List} from 'immutable';

export function editOrCreatePresentation(state) {
  let toggle = !state.get('editingOrCreatingPresentation');
  let newState = fromJS({editingOrCreatingPresentation: toggle});
  return state.merge(newState);
}

export function startPreplannedPresentation(state) {
  let newState = fromJS({preplannedPresentation: true});
  return state.merge(newState);
}
