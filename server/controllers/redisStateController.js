import redis from 'redis';
import {Map,fromJS} from 'immutable';

const scrubProps = ['hasVoted', 'userType'];

function scrubState(state, props) {
  for (let i = 0; i < props.length; i++) {
    if (state[props[i]]) {
      delete state[props[i]];
    } 
  }
  return state;
}

export function storeState(state) {
  // scrub state (remove local values)
  const appState = scrubState(state, scrubProps);
  const appStateString = JSON.stringify(appState);
  console.log('in storeSTate', appStateString);

  // connect to db
  const client = redis.createClient();
  client.set(state.currentRoom, appStateString, function(err, replies) {
    if(err) throw new Error(err);
    client.quit();
  });
}

export function retrieveState(currentRoom, callback) {
  const client = redis.createClient();
  client.get(currentRoom, function(err, replies) {
    if(err) throw new Error(err);
    
    replies = JSON.parse(replies);
    if(replies) {
      replies.connected = true;
    } else {
      replies = {connected: true};
    }
    console.log(replies, 'were');
    let appState = {
      type: 'SET_STATE',
      state: replies
    };
    callback(appState);
      

    client.quit();
  });
}
