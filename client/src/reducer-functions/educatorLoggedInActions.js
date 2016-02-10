import {Map, fromJS, toJS, List} from 'immutable';

export function educatorLogin(state, currentRoom) {  
  let newState = fromJS({
    educatorLoggedIn: true,
    userType: 'educator',
    currentRoom: currentRoom
  });
  return state.merge(newState);
}

export function editOrCreatePresentation(state) {
  let toggle = !state.get('editingOrCreatingPresentation');
  let newState = fromJS({editingOrCreatingPresentation: toggle});
  return state.merge(newState);
}

export function startPreplannedPresentation(state) {
  let newState = fromJS({preplannedPresentation: true});
  return state.merge(newState);
}

export function moveToNextQuestion(state, option) {
  let questionList = state.getIn(['currentPresentation','questionChoice']);
  let questionIndex = state.getIn(['currentPresentation', 'currentQuestionIndex']);
  if (questionIndex === (questionList.size - 1) || option === 'end') {
    let newState = {
      preplannedPresentation: false,
      currentPresentation: null,
      currentPresentationID: null,
      shareThumbsCheckResults: false,
      sharingAllThumbsCheckResults: false
    };
    return state.merge(newState);
  } else {
    let newState = state.updateIn(
      ['currentPresentation', 'currentQuestionIndex'],
      0,
      currentQuestionIndex => currentQuestionIndex + 1
    );
    newState = newState.updateIn(
      ['currentPresentation', 'currentQuestion'],
      currentQuestion => questionList.get(questionIndex + 1)
    );
    return state.merge(newState);
  }
}

export function selectTypeThumbCheck(state) {
  let newState = fromJS({
    createQuestionTypeMultipleChoice: false,
    createQuestionTypeThumbCheck: true,
    createQuestionTypeOpenResponse: false,
    a3choice: false,
    a4choice: false,
    a5choice: false
  });
  return state.merge(newState);
}

export function selectTypeMultipleChoice(state) {
  let newState = fromJS({
    createQuestionTypeMultipleChoice: true,
    createQuestionTypeThumbCheck: false,
    createQuestionTypeOpenResponse: false,
  });
  return state.merge(newState);
}

export function selectTypeOpenResponse(state) {
  let newState = fromJS({
    createQuestionTypeMultipleChoice: false,
    createQuestionTypeThumbCheck: false,
    createQuestionTypeOpenResponse: true,
    a3choice: false,
    a4choice: false,
    a5choice: false
  });
  return state.merge(newState);
}

export function toggle3choices(state) {
  let a3state = !state.get('a3choice');
  let a4state = false;
  let a5state = false;
  let newState = fromJS({a3choice: a3state, a4choice: a4state, a5choice: a5state});
  return state.merge(newState);
}

export function toggle4choices(state) {
  let a3state = false;
  let a4state = !state.get('a4choice');
  let a5state = false;
  let newState = fromJS({a3choice: a3state, a4choice: a4state, a5choice: a5state});
  return state.merge(newState);
}

export function toggle5choices(state) {
  let a3state = false;
  let a4state = false;
  let a5state = !state.get('a5choice');
  let newState = fromJS({a3choice: a3state, a4choice: a4state, a5choice: a5state});
  return state.merge(newState);
}

export function createQuestion(state, edit, questionData, cancel) {
  let toggle = !state.get('creatingQuestion');
  if (edit) {
    const newState = fromJS({creatingQuestion: toggle, editingQuestionIdInfo: questionData});
    return state.merge(newState);
  } else {
    const newState = fromJS({creatingQuestion: toggle, editingQuestionIdInfo: null});
    return state.merge(newState);
  }
}

export function setCurrentPresentationID(state, presentationID) {
  let newState = {currentPresentationID: presentationID};
  console.log('setting questions', newState);
  return state.merge(newState);
}

export function clearCurrentPresentationData(state) {
  let newState = {
    currentPresentation: null,
    currentPresentationID: null
  };
  return state.merge(newState);
}

export function endPreplannedPresentation(state) {
  let newState = {
    preplannedPresentation: false,
    currentPresentation: null,
    currentPresentationID: null,
    shareThumbsCheckResults: false,
    sharingAllThumbsCheckResults: false
  };
  return state.merge(newState);
}
