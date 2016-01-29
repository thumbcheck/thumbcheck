'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state) {
  // scrub state (remove local values)
  var appState = scrubState(state, scrubProps);
  var appStateString = JSON.stringify(appState);

  // connect to db
  var client = _redis2.default.createClient();
  client.set('1', appStateString, function (err, replies) {
    if (err) throw new Error(err);

    client.quit();
  });
};

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrubProps = ['hasVoted'];

function scrubState(state, props) {
  for (var i = 0; i < props.length; i++) {
    if (state[props[i]]) {
      delete state[props[i]];
    }
  }
  return state;
}