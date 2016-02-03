export function setState(state) {
  return {
    type: 'SET_STATE',
    state
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
export function multipleChoiceAnswer(answer) {
  return {
    meta: {remote: true},
    type: 'MULTIPLE_CHOICE_ANSWER',
    answer: answer
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