import {Map, fromJS, toJS, List} from 'immutable';
import underscore from 'underscore';

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, participantID) {
  let haveVoted = state.getIn(['tally', 'haveVoted']) || [];
  haveVoted = haveVoted.push(participantID);
  return state.mergeIn(['tally', 'haveVoted'], haveVoted);
}

function upVote(state) {
  return state.updateIn(
      ['tally', 'thumbsUp'],
      0,
      thumbsUp => thumbsUp + 1
  );
}

function downVote(state) {
  return state.updateIn(
      ['tally', 'thumbsDown'],
      0,
      thumbsDown => thumbsDown + 1
  );
}

function stopVote(state) {
  let newState = fromJS({voting: false});
  return state.merge(newState);
}

function startVote(state, option) {  
  let newState;
  if (option === 'thumbs') {
    newState = fromJS({
      voting: true,
      showgraph: "1",
      questionType: 'thumbs',
      tally: {
        thumbsUp : 0,
        thumbsDown: 0,
        haveVoted: []
      }
    });
  } else if (option === 'multipleChoice3') {
    newState = fromJS({
      voting: true,
      showgraph: "1",
      questionType: 'multipleChoice3',
      tally: {
        a: 0,
        b: 0,
        c: 0,
        haveVoted: []
      }
    });
  } else if (option == 'multipleChoice4') {
    newState = fromJS({
      voting: true,
      showgraph: "1",
      questionType: 'multipleChoice4',
      tally: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        haveVoted: []
      }
    });
  } else if (option === 'multipleChoice5') {
    newState = fromJS({
      voting: true,
      showgraph: "1",
      questionType: 'multipleChoice5',
      tally: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        haveVoted: []
      }
    });
  } else if (option === 'open') {
    newState = fromJS({
      voting: true,
      showgraph: "1",
      questionType: 'open',
      tally: {
        answers: [],
        haveVoted: []
      }
    });
  }
  return state.merge(newState);
}

function chooseQuestionType(state, option) {
  const newState = fromJS({
    questionType: option
  }); 
  return state.merge(newState);
}

function toggleThumbsGraph(state) {
  const shareResults = !state.get('shareThumbsCheckResults');
  const newState = {
    shareThumbsCheckResults: shareResults
  };
  return state.merge(newState);
}

function multipleChoiceAnswer(state, answer) {
  return state.updateIn(
      ['tally', answer],
      0,
      answer => answer + 1
  );
}

function openResponse(state, answer) {
  let answers = state.getIn(['tally', 'answers']) || [];
  answers = answers.push(answer);
  return state.mergeIn(['tally', 'answers'], answers);
}

function toggleTakingQuestions(state) {

  // Take care of takingQuestions is undefined case
  let currentTakingQuestions = state.get('takingQuestions');
  if (currentTakingQuestions) {
    currentTakingQuestions = state.getIn(['takingQuestions', 'allowQuestions']);
  }
  if (currentTakingQuestions) {
    return state.merge(fromJS({
      takingQuestions: {
        allowQuestions: false,
        buttonClass: 'btn grey white-text',
        buttonText: 'Allow Questions'
      }
    }));
  } else {
    return state.merge(fromJS({
      takingQuestions: {
        allowQuestions: true,
        buttonClass: 'btn light-grey white-text',
        buttonText: 'Disable Questions'
      }
    }));
  }
}

function addQuestion(state, id, name, alreadyAsked) {
  const studentId = id;
  // if the student's hand is already up, remove it from question queue
  if (alreadyAsked) {
    let questions = state.get('questions');
    questions = questions.filter(function(tuple) {
      if (tuple[0] === id)
      return tuple[0] !== id
    });
    let newState = fromJS({questions: questions});
    return state.merge(newState);

  } else {
    let questions = state.get('questions') || fromJS([]);
    questions = questions.push([id, name]);
    let newState = fromJS({questions: questions});
    return state.merge(newState);
  }
}

function toggleHandRaise(state) {
  if (state.get('handRaised')) {
    return state.set('handRaised', false);
  } else {
    return state.set('handRaised', true);
  }
}

function addStudentIdentity(state, id, name) {
  const newState = fromJS({
    id: id,
    name: name,
  });
  return state.merge(newState);
}

function chooseRole(state, choice) {
  return state.set('choice', choice);
}

function setErrorMessage(state, error) {
  return state.set('errMessage', error);
}

export default function(state = fromJS({}), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'SET_PARTICIPANT_ID':
    return state.set('participantID', action.participantID);
  case 'VOTE':
    return vote(state, action.participantID);
  case 'UPVOTE':
    return upVote(state);
  case 'DOWNVOTE':
    return downVote(state);
  case 'STOP_VOTE':
    return stopVote(state);
  case 'START_VOTE':
    return startVote(state, action.option);
  case 'CHOOSE_QUESTION_TYPE':
    return chooseQuestionType(state, action.option);
  case 'MULTIPLE_CHOICE_ANSWER':
    return multipleChoiceAnswer(state, action.answer);
  case 'OPEN_RESPONSE':
    return openResponse(state, action.answer);
  case 'TAKING_QUESTIONS':
    return toggleTakingQuestions(state);
  case 'ADD_QUESTION':
    return addQuestion(state, action.id, action.name, action.alreadyAsked);
  case 'TOGGLE_HAND_RAISE':
    return toggleHandRaise(state);
  case 'ADD_STUDENT_ID_TO_CLIENT':
    return addStudentIdentity(state, action.id, action.name);
  case 'CHOOSE_ROLE':
    return chooseRole(state, action.choice);
  case 'SET_ERROR':
    return setErrorMessage(state, action.errMessage);
  case 'LOWER_STUDENT_HAND':
    return addQuestion(state, action.id, action.name, true);
  case 'TOGGLE_THUMBS_GRAPH':
    return toggleThumbsGraph(state);
  case 'LOWER_STUDENT_HAND':
    return addQuestion(state, action.id, action.name, true);
  case 'SET_NUMUSERS':
    return state.set('numUsers', action.numUsers);
  }
  return state;
}
