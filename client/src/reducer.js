import {Map, fromJS} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state) {
  return state.set('hasVoted', true);
}



export default function(state = fromJS({voting: false}), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'VOTE':
    return vote(state);
  }
  return state;
}
