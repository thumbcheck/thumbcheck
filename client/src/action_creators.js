export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function setParticipantID(participantID) {
  return {
    type: 'SET_PARTICIPANT_ID',
    participantID
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

export function vote(participantID) {
  console.log(participantID);
  return {
    meta: {remote: true},
    type: 'VOTE',
    participantID: participantID
  };
}

export function startVote(option) {
  return {
    meta: {remote: true},
    type: 'START_VOTE',
    option: option
  }
}

export function stopVote() {
  return {
    meta: {remote: true},
    type: 'STOP_VOTE',
  };
}

export function multipleChoiceAnswer(answer) {
  console.log(answer);
  return {
    meta: {remote: true},
    type: 'MULTIPLE_CHOICE_ANSWER',
    answer: answer
  };
}

export function toggleTakingQuestions() {
  return {
    meta: {remote: true},
    type: 'TAKING_QUESTIONS',
  };
}
export function addQuestion(id, name, alreadyAsked) {
  return {
    meta: {remote: true},
    type: 'ADD_QUESTION',
    name: name,
    id: id,
    alreadyAsked: alreadyAsked
  };
}
export function lowerStudentHand(id) {
  return {
    meta: {remote: true},
    type: 'LOWER_STUDENT_HAND',
    id: id
  };
}

export function toggleHandRaise() {
  return {
    type: 'TOGGLE_HAND_RAISE'
  };
}

export function addStudentIdentity(id, name) {
  return {
    type: 'ADD_STUDENT_ID_TO_CLIENT',
    id: id,
    name: name
  };
}

export function chooseRole(choice) {
  return {
    type: 'CHOOSE_ROLE',
    choice: choice
  };
}

export function setError(errMessage) {
  return {
    type: 'SET_ERROR',
    errMessage: errMessage
  };
}

export function toggleThumbsCheckResultsGraph() {
  return {
    meta: {remote: true},
    type: 'TOGGLE_THUMBS_GRAPH'
  };
}
