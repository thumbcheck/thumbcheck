import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe('reducer', () => {

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

  it('removes hasVoted on state when STOP_VOTE is emitted', () => {
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
      hasVoted: false
    }));
  });
});
