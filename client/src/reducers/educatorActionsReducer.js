import {Map, fromJS, toJS, List} from 'immutable';
import underscore from 'underscore';

function stopVote(state) {
  let newState = fromJS({voting: false});
  return state.merge(newState);
}

function stopVote(state) {
  let newState = fromJS({voting: false});
  return state.merge(newState);
}

//*** NEED TO FIGURE OUT 'MultipleChoice' vs 'multipleChoice3' etc ***//
function startVote(state, option) {  
  let newState;
  if (option === 'thumbs') {
    newState = fromJS({
      voting: true,
      showgraph: "1",
      questionType: 'thumbs',
      shareThumbsCheckResults: false,
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
      shareThumbsCheckResults: false,
      tally: {
        a: 0,
        b: 0,
        c: 0,
        haveVoted: []
      }
    });
  } else if (option === 'multipleChoice4') {
    newState = fromJS({
      voting: true,
      showgraph: "1",
      questionType: 'multipleChoice4',
      shareThumbsCheckResults: false,
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
      shareThumbsCheckResults: false,
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
      shareThumbsCheckResults: false,
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
      return tuple[0] !== id;
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

function toggleThumbsGraph(state) {
  const newState = {
    shareThumbsCheckResults: true
  };
  return state.merge(newState);
}

export default function(state = fromJS({}), action) {
  switch (action.type) {
  case 'STOP_VOTE':
    return stopVote(state);
  case 'START_VOTE':
    return startVote(state, action.option);
  case 'CHOOSE_QUESTION_TYPE':
    return chooseQuestionType(state, action.option);
  case 'TAKING_QUESTIONS':
    return toggleTakingQuestions(state);
  case 'LOWER_STUDENT_HAND':
    return addQuestion(state, action.id, action.name, true);
  //*** POSSIBLY RENAME TO TOGGLE_SHARE_GRAPH ***//
  case 'TOGGLE_THUMBS_GRAPH':
    return toggleThumbsGraph(state);
  }
  return state;
}
