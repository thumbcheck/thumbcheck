import * as ApiFunctions from './helpers/apiFunctions.js';

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
  };
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

export function openResponse(answer) {
  return {
    meta: {remote: true},
    type: 'OPEN_RESPONSE',
    answer: answer
  };
}

export function chooseQuestionType(option) {
  return {
    meta: {remote: true},
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

export function createOrEditPresentation() {
  return {
    type: 'CREATE_OR_EDIT_PRESENTATION'
  };
}

export function startPreplannedPresentation() {
  return {
    meta: {remote:true},
    type: 'PREPLANNED_PRESENTATION'
  };
}

export function moveToNextQuestion() {
  return {
    meta: {remote: true},
    type: 'MOVE_NEXT_QUESTION'
  };
}

export function toggleTypeMultipleChoice() {
  return {
    type: 'TOGGLE_TYPE_MULTIPLE_CHOICE'
  };
}

export function toggle3choices() {
  return {
    type: 'TOGGLE_3_CHOICES'
  };
}

export function toggle4choices() {
  return {
    type: 'TOGGLE_4_CHOICES'
  };
}

export function toggle5choices() {
  return {
    type: 'TOGGLE_5_CHOICES'
  };
}

export function getAllPresentations(educatorID) {
  return function(dispatch) {
    let apiCall = ApiFunctions.getUserPresentations(educatorID);
    apiCall
      .success((response) => {
        let action = {
          type: 'SET_ALL_PRESENTATION_DATA',
          data: response
        };
        dispatch(action);
      })
      .error((jqXHR, textStatus, errorThrown) => {
        console.log('Error: ', qXHR, textStatus, errorThrown);
      });
  };
}

export function getPresentationData(presentationID) {
  return function(dispatch) {
    let apiCall = ApiFunctions.getPresentation(presentationID);
    apiCall
      .success((response) => {
        let action = {
          type: 'SET_PRESENTATION_DATA',
          data: response
        };
        dispatch(action);
      })
      .error((jqXHR, textStatus, errorThrown) => {
        console.log('Error: ', qXHR, textStatus, errorThrown);
      });
  };
}

export function addPresentationQuestion(questionData) {
  return function(dispatch) {
    return ApiFunctions.addPresentationQuestion(questionData, callback)
    .then((response) => {
      let action = {
        type: 'POST_QUESTION_DATA',
            };
            dispatch(action);
          })
          .catch((error) => {
            throw new Error(error);
          });

  };
}

export function addPresentation(presentationData) {
  return function(dispatch) {
    let apiCall = ApiFunctions.addPresentation(presentationData);
    apiCall
      .success((response) => {
        let action = {
          type: 'POST_PRESENTATION_DATA',
        };
        dispatch(action);
      })
      .error((jqXHR, textStatus, errorThrown) => {
      console.log('Error: ', qXHR, textStatus, errorThrown);
      });
  };
}
