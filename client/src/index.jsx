import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import io from 'socket.io-client';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', function(state) {
  console.log('Received state from server!');
  socket.emit('action', {data: 'Hello World!'});
});

const routes = <Route component={App}>
  <Route path = '/' component={App} />
</Route>;

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
