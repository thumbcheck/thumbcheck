'use strict';

var _immutable = require('immutable');

var _chai = require('chai');

var _reducer = require('../src/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('reducer', function () {

  it('has an intial state', function () {
    // call reducer with no arguments
    var beginningState = (0, _reducer2.default)();
    (0, _chai.expect)(beginningState).to.equal((0, _immutable.fromJS)({
      voting: false
    }));
  });

  it('handles START_VOTE', function () {
    var initialState = (0, _reducer2.default)();
    var action = { type: 'UPVOTE' };
    var nextState = (0, _reducer2.default)(initialState, action);

    (0, _chai.expect)(nextState).to.equal((0, _immutable.fromJS)({
      voting: true,
      tally: {
        thumbsUp: 0,
        thumbsDown: 0
      }
    }));
  });

  it('handles UPVOTE', function () {
    var initialState = (0, _reducer2.default)();
    var action = { type: 'UPVOTE' };
    var nextState = (0, _reducer2.default)(initialState, action);

    (0, _chai.expect)(nextState).to.equal((0, _immutable.fromJS)({
      voting: true,
      tally: {
        thumbsUp: 1,
        thumbsDown: 0
      }
    }));
  });

  it('handles DOWNVOTE', function () {
    var initialState = (0, _reducer2.default)();
    var action = { type: 'DOWNVOTE' };
    var nextState = (0, _reducer2.default)(initialState, action);

    (0, _chai.expect)(nextState).to.equal((0, _immutable.fromJS)({
      voting: true,
      tally: {
        thumbsUp: 0,
        thumbsDown: 1
      }
    }));
  });

  it('handles STOP_VOTE', function () {
    var initialState = (0, _reducer2.default)();
    // start the vote first
    var action = { type: 'START_VOTE' };
    var nextState = (0, _reducer2.default)(initialState, action);
    // add a vote
    var action2 = { type: 'UPVOTE' };
    var nextState2 = (0, _reducer2.default)(nextState, action);
    // expect STOP_VOTE to reset to inital state
    (0, _chai.expect)(nextState2).to.equal((0, _immutable.fromJS)({
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