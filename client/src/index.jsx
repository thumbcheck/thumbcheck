import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import io from 'socket.io-client';
import {setState, startVote} from './action_creators';
import reduxStateEmitterMiddleware from './reduxStateEmitterMiddleware';
import MainLanding from './components/MainLanding';
import setLocalStorage from './setLocalStorage';

// Socket Connection to server
const socket = io();
socket.on('remoteAction', function(remoteAction) {
  store.dispatch(remoteAction);
});

// Create redux store
const createStoreWithMiddleware = applyMiddleware(reduxStateEmitterMiddleware(socket))(createStore);
const store = createStoreWithMiddleware(reducer);

/****THIS NEEDS TO BE REFACTORED (setLocalStorage()) ****/
// Join specific room when socket is created
socket.emit('joinRoom', setLocalStorage());
/****END THIS NEEDS TO BE REFACTORED ***/


// Sets up Routing
const routes = <Route component={App}>
  <Route path = '/' component={MainLanding} />
</Route>;


// Renders App to DOM
ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
