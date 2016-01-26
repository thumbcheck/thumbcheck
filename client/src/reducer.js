import {Map, fromJS} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state) {
  return state.set('voting', false);
}

function stopVote() {
  return fromJS({voting: false});
}

function startVote() {
  return fromJS({
   voting: true,
   tally: {
    thumbsUp : 0,
    thumbsDown: 0
   }
 });
}

export default function(state = fromJS({voting: false}), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'VOTE':
    return vote(state);
  case 'STOP_VOTE':
    return stopVote();
  case 'START_VOTE':
    return startVote();
  }
  return state;
}
