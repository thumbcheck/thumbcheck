import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('has an intial state', () => {    
    // call reducer with no arguments
    const beginningState = reducer();
    expect(beginningState).to.equal(fromJS({
      voting: false
    }));
  });

  it('handles START_VOTE', () => {
    const initialState = reducer();
    const action = {type: 'UPVOTE'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      voting: true,
      tally: {
        thumbsUp : 0,
        thumbsDown: 0  
      }        
    }));
  });

  it('handles UPVOTE', () => {
    const initialState = reducer();
    const action = {type: 'UPVOTE'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      voting: true, 
      tally: {
        thumbsUp : 1,
        thumbsDown: 0
      }  
    }));
  });

  it('handles DOWNVOTE', () => {
    const initialState = reducer();
    const action = {type: 'DOWNVOTE'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      voting: true, 
      tally: {
        thumbsUp : 0,
        thumbsDown: 1
      }  
    }));
  });

  it('handles STOP_VOTE', () => {
    const initialState = reducer();
    // start the vote first
    const action = {type: 'START_VOTE'};
    const nextState = reducer(initialState, action);
    // add a vote
    const action2 = {type: 'UPVOTE'};
    const nextState2 = reducer(nextState, action);
    // expect STOP_VOTE to reset to inital state
    expect(nextState2).to.equal(fromJS({
      voting: false        
    }));
  });
  

  // it('can be used with reduce', () => {
  //   const actions = [
  //     {type: 'SET_ENTRIES', entries: ['Trainspotting', '28 Days Later']},
  //     {type: 'NEXT'},
  //     {type: 'VOTE', entry: 'Trainspotting'},
  //     {type: 'VOTE', entry: '28 Days Later'},
  //     {type: 'VOTE', entry: 'Trainspotting'},
  //     {type: 'NEXT'}
  //   ];
  //   const finalState = actions.reduce(reducer, Map());

  //   expect(finalState).to.equal(fromJS({
  //     winner: 'Trainspotting'
  //   }));
  // });
});
