import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import io from 'socket.io-client';
import {setState} from './action_creators';

// import {TestContainer} from './components/Test';

// Create redux store
const store = createStore(reducer);
// Socket Connection to server
const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', function(state) {
  console.log('Received state from server!');
  store.dispatch(setState(state));
});

// Sets up Routing
const routes = <Route component={App}>
  <Route path = '/' component={App} />
</Route>;

// Renders App to DOM
ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
