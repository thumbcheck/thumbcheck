import redis from 'redis';
import {Map,fromJS} from 'immutable';

const scrubProps = ['hasVoted', 'userType', 'participantID'];

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
  if (state.currentRoom !== '') {
    const appState = scrubState(state, scrubProps);
    const appStateString = JSON.stringify(appState);

    // connect to db
    const client = redis.createClient();
    client.set(state.currentRoom, appStateString, (err, replies) => {
      if(err) throw new Error(err);
      client.quit();
    });    
  }
}

export function retrieveState(currentRoom, callback) {
  if (currentRoom !== '') {
    const client = redis.createClient();
    client.get(currentRoom, (err, replies) => {
      if(err) throw new Error(err);
      
      // Handle reply from db
      replies = JSON.parse(replies);
      if(replies) {
        replies.connected = true;
      } else {
        replies = {connected: true};
      }

      // Create Action Creator
      let appState = {
        type: 'SET_STATE',
        state: replies
      };

      // Callback 
      callback(err, appState);
        

      client.quit();
    });    
  }
}

export function checkRoom(room, callback) {
  const client = redis.createClient();
  client.get(room, (err, reply) => {
    if (err) throw new Error(err);

    if (reply === null) {      
      callback(false, room);
    } else {
      callback(true, room);
    }
    client.quit();
  });
}
