import {Map, fromJS, toJS, List} from 'immutable';

export function addPresentation(state) {
  return state;
}

export function setAllPresentations(state, data) {
  let presentations = fromJS(data);
  let newState = {allEducatorPresentations: presentations};
  return state.merge(newState);
}

export function setPresentation(state, data) {
  let questions = [];
  data.questions.forEach((question) => {
    let questionObject = {};
    questionObject.prompt = question.prompt;
    questionObject.id = question.id;

    if(question['question_type'] === "Multiple Choice") {
      questionObject.questionChoices = [];
      if (question['choice_a']) {
        questionObject.questionChoices.push(['a', question['choice_a']]);
      }
      if (question['choice_b']) {
        questionObject.questionChoices.push(['b', question['choice_b']]);
      }
      if (question['choice_c']) {
        questionObject.questionChoices.push(['c', question['choice_c']]);
      }
      if (question['choice_d']) {
        questionObject.questionChoices.push(['d', question['choice_d']]);
      }
      if (question['choice_e']) {
        questionObject.questionChoices.push(['e', question['choice_e']]);
      }
    }

    questions.push(questionObject);
  });
  let currentPresentation = {
    presentation: data.presentation,
    questionChoice: questions
  };
  let newState = {currentPresentation: currentPresentation};
  return state.merge(newState);
}

export function setNewPresentation(state,data) {
  let currentPresentation = {
    presentation: {
      title: data.title,
    },
    questionChoice: []
  };
  let newState = {
    currentPresentation: currentPresentation,
    currentPresentationID: data.id
  };
  console.log(newState, 'api set new presntaiton');
  return state.merge(newState);
}
