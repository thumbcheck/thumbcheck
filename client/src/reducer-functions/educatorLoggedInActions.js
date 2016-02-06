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

export function moveToNextQuestion(state) {
  let questionList = state.getIn(['currentPresentation', 'questions']);
  let questionIndex = state.getIn(['currentPresentation', 'currentQuestionIndex']);
  if (questionIndex === (questionList.size - 1)) {
    let newState = {preplannedPresentation: false};
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
