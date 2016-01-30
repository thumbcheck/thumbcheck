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

export function vote() {
  return {
    type: 'VOTE',
  };
}

export function startVote() {
  return {
    meta: {remote: true},
    type: 'START_VOTE'
  };
}

export function stopVote() {
  return {
    meta: {remote: true},
    type: 'STOP_VOTE',
  };
}

export function toggleTakingQuestions() {
  return {
    meta: {remote: true},
    type: 'TAKING_QUESTIONS',
  };
}
export function addQuestionToQueue(name, id) {
  return {
    meta: {remote: true},
    type: 'ADD_QUESTION',
    name: name,
    id: id
  };
}

export function toggleHandRaise() {
  return {
    type: 'TOGGLE_HAND_RAISE'
  };
}
