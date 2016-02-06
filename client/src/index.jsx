import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import io from 'socket.io-client';
import {setState, startVote, setParticipantID} from './action_creators';
import reduxStateEmitterMiddleware from './reduxStateEmitterMiddleware';
import {MainLandingContainer} from './components/MainLanding';
import setLocalStorage from './setLocalStorage';
import generateID from './helpers/generateID';
import thunk from './redux-thunk';
import {Map} from 'immutable';

// Socket Connection to server
const socket = io();
socket.on('remoteAction', (remoteAction) => {
  store.dispatch(remoteAction);
});
socket.on('syncState', (appState) => {
  store.dispatch(appState);
});

// Create redux store
const createStoreWithMiddleware = applyMiddleware(thunk, reduxStateEmitterMiddleware(socket))(createStore);
const store = createStoreWithMiddleware(reducer);
// store.dispatch(setParticipantID(generateID()));
generateID();

store.subscribe(() => {
  let currentState = store.getState().toJS();
  if(currentState.connected) {
    socket.emit('state', store.getState().toJS());
  }
});

/****THIS NEEDS TO BE REFACTORED (setLocalStorage()) ****/
// Join specific room when socket is created
// socket.emit('joinRoom', setLocalStorage());
socket.emit('joinRoom', setLocalStorage(true, store ));
/****END THIS NEEDS TO BE REFACTORED ***/


// Sets up Routing
const routes = (
  <Route component={App}>
    <Route path = '/' component={MainLandingContainer} />
  </Route>
);


// Renders App to DOM
ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
