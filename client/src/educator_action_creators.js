import * as ApiFunctions from './helpers/apiFunctions.js';

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
export function startVote(option) {
  return {
    meta: {remote: true},
    type: 'START_VOTE',
    option: option
  };
}
export function stopVote() {
  return {
    meta: {remote: true},
    type: 'STOP_VOTE',
  };
}
export function chooseQuestionType(option) {
  return {
    type: 'CHOOSE_QUESTION_TYPE',
    option: option
  };
}
export function toggleTakingQuestions() {
  return {
    meta: {remote: true},
    type: 'TAKING_QUESTIONS',
  };
}
export function lowerStudentHand(id) {
  return {
    meta: {remote: true},
    type: 'LOWER_STUDENT_HAND',
    id: id
  };
}
export function toggleThumbsCheckResultsGraph() {
  return {
    meta: {remote: true},
    type: 'TOGGLE_THUMBS_GRAPH'
  };
}
