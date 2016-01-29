import redis from 'redis';
import {fromJS} from 'immutable';

const scrubProps = ['hasVoted'];

function scrubState(state, props) {
  for (let i = 0; i < props.length; i++) {
    if (state[props[i]]) {
      delete state[props[i]];
    } 
  }
  return state;
}

export default function(state) {
    // scrub state (remove local values)
    const appState = scrubState(state, scrubProps);
    const appStateString = JSON.stringify(appState);

    // connect to db
    const client = redis.createClient();
    client.set('1', appStateString, function(err, replies) {
      if(err) throw new Error(err);

      client.quit();
    });
}
