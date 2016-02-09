import {Map, fromJS, toJS, List} from 'immutable';
import underscore from 'underscore';
import * as StudentActions from './reducer-functions/studentActions';
import * as EducatorActions from './reducer-functions/educatorActions';
import * as UserSettings from './reducer-functions/userSettings';
import * as EducatorLoggedInActions from './reducer-functions/educatorLoggedInActions';
import * as EducatorAPIActions from './reducer-functions/educatorAPIActions';

const initialState = {
  prevQuestionType: false,
  // don't delete above; not placeholder data
  currentPresentation: {
    presentation: {
      title: "George",
      educatorID: 4
    },
    questions: [{prompt: 'Favorite Color?', questionChoices: [{letter: 'a', content:'green'},{letter: 'b', content:'blue'},{letter: 'c', content:'red'}] },
        {prompt: 'Favorite Food', questionChoices: [{letter: 'a', content:'pasta'},{letter: 'b', content:'pizza'},{letter: 'c', content:'jamba'}]}],
    currentQuestionIndex: 0,
    currentQuestion: {prompt: 'Favorite Color?', questionChoices: [{letter: 'a', content:'green'},{letter: 'b', content:'blue'},{letter: 'c', content:'red'}] }
  },

  // currentPresentation: {
  //   presentation: {
  //     title: "George",
  //     educatorID: 1
  //   },
  //   questions: [{prompt: 'Favorite Color?', questionChoices: [{letter: 'a', content:'green'},{letter: 'b', content:'blue'},{letter: 'c', content:'red'}] },
  //       {prompt: 'Favorite Food', questionChoices: [{letter: 'a', content:'pasta'},{letter: 'b', content:'pizza'},{letter: 'c', content:'jamba'}]}],
  //   currentQuestionIndex: 0,
  //   currentQuestion: {prompt: 'Favorite Color?', questionChoices: [{letter: 'a', content:'green'},{letter: 'b', content:'blue'},{letter: 'c', content:'red'}] }
  // },
  //educatorLoggedIn: true,
  educatorID: 1
};

export default function(state = fromJS(/*temp*/initialState), action) {
  switch (action.type) {
  case 'SET_STATE':
    return UserSettings.setState(state, action.state);
  case 'SET_PARTICIPANT_ID':
    return state.set('participantID', action.participantID);
  case 'VOTE':
    return StudentActions.vote(state, action.participantID);
  case 'UPVOTE':
    return StudentActions.upVote(state);
  case 'DOWNVOTE':
    return StudentActions.downVote(state);
  case 'STOP_VOTE':
    return EducatorActions.stopVote(state);
  case 'START_VOTE':
    return EducatorActions.startVote(state, action.option);
  case 'CHOOSE_QUESTION_TYPE':
    return EducatorActions.chooseQuestionType(state, action.option);
  case 'MULTIPLE_CHOICE_ANSWER':
    return StudentActions.multipleChoiceAnswer(state, action.answer);
  case 'OPEN_RESPONSE':
    return StudentActions.openResponse(state, action.answer);
  case 'TAKING_QUESTIONS':
    return EducatorActions.toggleTakingQuestions(state);
  case 'ADD_QUESTION':
    return StudentActions.addQuestion(state, action.id, action.name, action.alreadyAsked);
  case 'TOGGLE_HAND_RAISE':
    return StudentActions.toggleHandRaise(state);
  case 'ADD_STUDENT_ID_TO_CLIENT':
    return UserSettings.addStudentIdentity(state, action.id, action.name);
  case 'CHOOSE_ROLE':
    return UserSettings.chooseRole(state, action.choice);
  case 'SET_ERROR':
    return UserSettings.setErrorMessage(state, action.errMessage);
  case 'LOWER_STUDENT_HAND':
    return EducatorActions.addQuestion(state, action.id, action.name, true);
  case 'TOGGLE_THUMBS_GRAPH':
    return EducatorActions.toggleThumbsGraph(state);
  // case 'LOWER_STUDENT_HAND':
  //   return addQuestion(state, action.id, action.name, true);
  case 'SET_NUMUSERS':
    return state.set('numUsers', action.numUsers);
  case 'EDUCATOR_LOGIN':
    return EducatorLoggedInActions.educatorLogin(state, action.currentRoom);
  case 'CREATE_OR_EDIT_PRESENTATION':
    return EducatorLoggedInActions.editOrCreatePresentation(state);
  case 'PREPLANNED_PRESENTATION':
    return EducatorLoggedInActions.startPreplannedPresentation(state);
  case 'MOVE_NEXT_QUESTION':
    return EducatorLoggedInActions.moveToNextQuestion(state);
  case 'SELECT_TYPE_THUMB_CHECK':
    return EducatorLoggedInActions.selectTypeThumbCheck(state);
  case 'SELECT_TYPE_OPEN_RESPONSE':
    return EducatorLoggedInActions.selectTypeOpenResponse(state);
  case 'SELECT_TYPE_MULTIPLE_CHOICE':
    return EducatorLoggedInActions.selectTypeMultipleChoice(state);
  case 'TOGGLE_3_CHOICES':
    return EducatorLoggedInActions.toggle3choices(state);
  case 'TOGGLE_4_CHOICES':
    return EducatorLoggedInActions.toggle4choices(state);
  case 'TOGGLE_5_CHOICES':
    return EducatorLoggedInActions.toggle5choices(state);
  case 'POST_PRESENTATION_DATA':
    return EducatorAPIActions.addPresentation(state);
  case 'SET_ALL_PRESENTATION_DATA':
    return EducatorAPIActions.setAllPresentations(state,action.data);
  case 'SET_PRESENTATION_DATA':
    return EducatorAPIActions.setPresentation(state,action.data);
  case 'CREATE_QUESTION':    
    return EducatorLoggedInActions.createQuestion(state, action.edit, action.dataForQuestion);
  case 'DELETE_QUESTION':
    return EducatorAPIActions.deleteQuestion(state);
  case 'SET_CURRENT_PRESENTATION_ID':
    return EducatorLoggedInActions.setCurrentPresentationID(state, action.presentationID);
  case 'CLEAR_CURRENT_PRESENTATION_DATA':
    return EducatorLoggedInActions.clearCurrentPresentationData(state);
  case 'SET_NEW_PRESENTATION':
    return EducatorAPIActions.setNewPresentation(state, action.response);
  }

  return state;
}
