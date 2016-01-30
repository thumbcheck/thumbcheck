import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe('reducer', () => {

  const window = false;

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: fromJS({voting: false})
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      voting: false
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        voting: false
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      voting: false
    }));
  });

  it('sets hasVoted after a client VOTE', () => {
    const state = fromJS({
      voting: true,
      tally: {
        thumbsUp : 0,
        thumbsDown: 0
      }
    });
    const action = {type: 'VOTE'};
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      voting: true,
      hasVoted: true,
      tally: {
        thumbsUp : 0,
        thumbsDown: 0
      }
    }));
  });

  it('handles UPVOTE', () => {
    const initialState = fromJS({
      voting: true,
      tally: {
        thumbsUp : 0,
        thumbsDown: 0
      }
    });
    const action = {type: 'UPVOTE'};
    const nextState = reducer(initialState, action);
    const finalState = reducer(nextState, {type: 'VOTE'});

    expect(finalState).to.equal(fromJS({
      voting: true,
      hasVoted: true, 
      tally: {
        thumbsUp : 1,
        thumbsDown: 0
      }  
    }));
  });

  it('handles DOWNVOTE', () => {
    const initialState = fromJS({
      voting: true,
      tally: {
        thumbsUp : 0,
        thumbsDown: 0
      }
    });
    const action = {type: 'DOWNVOTE'};
    const nextState = reducer(initialState, action);
    const finalState = reducer(nextState, {type: 'VOTE'});

    expect(finalState).to.equal(fromJS({
      voting: true,
      hasVoted: true, 
      tally: {
        thumbsUp : 0,
        thumbsDown: 1
      }  
    }));
  });

  it('handles START_VOTE', () => {
    const initialState = fromJS({});
    const action = {type: 'START_VOTE'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      voting: true,
      tally: {
        thumbsUp : 0,
        thumbsDown: 0
      }  
    }));
  });

  it('it handles STOP_VOTE and removes hasVoted on state', () => {
    const initialState = fromJS({
      voting: true,
      hasVoted: true,
      tally: {
        thumbsUp : 5,
        thumbsDown: 2
      }
    });
    const action = {
      type: 'STOP_VOTE',
      state: {
        voting: false,
        hasVoted: false
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      voting: false,
      hasVoted: false,
      tally: {
        thumbsUp : 5,
        thumbsDown: 2
      }
    }));
  });

  it('does not allow client to VOTE more than once in same voting period' , () => {
    const state = fromJS({
      voting: true,
      tally: {
        thumbsUp : 0,
        thumbsDown: 0
      }
    });
    const action = {type: 'UPVOTE'};
    const action2 = {type: 'VOTE'};
    const nextState = reducer(reducer(state, action), action2);
    const finalState = reducer(reducer(nextState, action), action2);

    expect(nextState).to.equal(fromJS({
      voting: true,
      hasVoted: true,
      tally: {
        thumbsUp : 1,
        thumbsDown: 0
      }
    }));

    expect(finalState).to.equal(fromJS({
      voting: true,
      hasVoted: true,
      tally: {
        thumbsUp : 1,
        thumbsDown: 0
      }
    }));
  });

  it('handles TAKING_QUESTIONS', () => {
    const initialState = fromJS({
      voting: true,
      tally: {
        thumbsUp : 0,
        thumbsDown: 0
      }
    });
    const action = {type: 'TAKING_QUESTIONS'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      voting: true,
      takingQuestions: {
        takingQuestions: true,
        buttonClass: 'btn red request-btn white-text',
        buttonText: 'End Allow Questions'
      },
      tally: {
        thumbsUp : 0,
        thumbsDown: 0
      }  
    }));

    const finalState = reducer(nextState, action);

    expect(finalState).to.equal(fromJS({
      voting: true,
      takingQuestions: {
        takingQuestions: false,
        buttonClass: 'btn green request-btn white-text',
        buttonText: 'Allow Questions'
      },
      tally: {
        thumbsUp : 0,
        thumbsDown: 0
      }  
    }));

  });

});
