import {Map, fromJS, toJS, List} from 'immutable';
import underscore from 'underscore';
import * as StudentActions from './reducer-functions/studentActions';
import * as EducatorActions from './reducer-functions/educatorActions';
import * as UserSettings from './reducer-functions/userSettings';

export default function(state = fromJS(/*temp*/{preplannedPresentation: true}), action) {
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
  case 'LOWER_STUDENT_HAND':
    return addQuestion(state, action.id, action.name, true);
  case 'SET_NUMUSERS':
    return state.set('numUsers', action.numUsers);
  }
  return state;
}
