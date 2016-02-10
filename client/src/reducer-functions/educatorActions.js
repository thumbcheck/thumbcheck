import {Map, fromJS, toJS, List} from 'immutable';
import underscore from 'underscore';

export function stopVote(state) {
  let newState = fromJS({voting: false, prevQuestionType: state.get('questionType')});
  return state.merge(newState);
}

//*** NEED TO FIGURE OUT 'MultipleChoice' vs 'multipleChoice3' etc ***//
export function startVote(state, option) {  
  let newState;
  if (option === 'thumbs') {
    newState = fromJS({
      voting: true,
      showgraph: true,
      questionType: 'thumbs',
      prevQuestionType: false,
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
      showgraph: true,
      questionType: 'multipleChoice3',
      prevQuestionType: false,
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
      showgraph: true,
      questionType: 'multipleChoice4',
      prevQuestionType: false,
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
      showgraph: true,
      questionType: 'multipleChoice5',
      prevQuestionType: false,
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
      showgraph: true,
      questionType: 'open',
      prevQuestionType: false,
      shareThumbsCheckResults: false,
      tally: {
        answers: [],
        haveVoted: []
      }
    });
  }
  console.log(newState, 'newSTATE')
  return state.merge(newState);
}

export function chooseQuestionType(state, option) {
  const newState = fromJS({
    questionType: option
  }); 
  return state.merge(newState);
}

export function toggleTakingQuestions(state) {

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

export function addQuestion(state, id, name, alreadyAsked) {
  const studentId = id;
  // if the student's hand is already up, remove it from question queue
  if (alreadyAsked) {
    let questions = state.get('questions');
    questions = questions.filter(function(tuple) {
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

export function toggleThumbsGraph(state) {
  const newState = {
    shareThumbsCheckResults: true
  };
  return state.merge(newState);
}

export function ToggleSharingAllThumbsCheckResults(state) {
  let toggle = !state.get('sharingAllThumbsCheckResults');
  const newState = {
    sharingAllThumbsCheckResults: toggle
  };
  return state.merge(newState);
}


