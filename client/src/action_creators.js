export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}
export function upvote() {
  return {
    meta: {remote: true},
    type: 'UPVOTE'
  };
}

export function downvote() {
  return {
    meta: {remote: true},
    type: 'DOWNVOTE'
  };
}
