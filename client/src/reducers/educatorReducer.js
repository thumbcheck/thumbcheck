import {Map, fromJS, toJS, List} from 'immutable';
import underscore from 'underscore';

function stopVote(state) {
  let newState = fromJS({voting: false});
  return state.merge(newState);
}

function startVote(state, option) {
  console.log("options", option);
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
  } else if (option === 3) {
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
  } else if (option == 4) {
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
  } else if (option === 5) {
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
  newState = fromJS({
    questionType: open
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

export default function(state = fromJS({}), action) {
  switch (action.type) {
  case 'STOP_VOTE':
    return stopVote(state);
  case 'START_VOTE':
    return startVote(state, action.option);
  case 'CHOOSE_QUESTION_TYPE':
    return startVote(state, action.option);
  case 'TAKING_QUESTIONS':
    return toggleTakingQuestions(state);
  case 'TOGGLE_THUMBS_GRAPH':
    return toggleThumbsGraph(state);
  }
  return state;
}
