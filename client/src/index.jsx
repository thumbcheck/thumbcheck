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
import {StudentContainer} from './components/student/StudentMain';
import EducatorLanding from './components/educator/EducatorLanding';
import {EducatorContainer} from './components/educator/EducatorMain';
// import getParameterByName from '/../dist/javascripts/main.js';

// import {TestContainer} from './components/Test';

// Socket Connection to server
const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('remoteAction', function(remoteAction) {
  console.log('Received state from server!');
  console.log(remoteAction, 'action from server');
  store.dispatch(remoteAction, typeof remoteAction);
  // store.dispatch(setState({voting: true, hasVoted: true, tally: {thumbsUp: 2, thumbsDown: 1}}));
});

// Create redux store
const createStoreWithMiddleware = applyMiddleware(reduxStateEmitterMiddleware(socket))(createStore);
const store = createStoreWithMiddleware(reducer);

/*  THIS SHOUDL GO IN MAIN.JS  */
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

let path = window.location.pathname.slice(1);
console.log(path);
window.localStorage.setItem('room', path);
if (path && getParameterByName('type')) {
  // teacher in the room
  window.localStorage.setItem('userType', 'educator');
  console.log('teacher in room')
} else if (path[0]) {
  // student in the room
  window.localStorage.setItem('userType', 'student');
  console.log('student in room')
} else {
  // teacher on the home page
  window.localStorage.setItem('userType', '');
  console.log('teacher on home page')
}
socket.emit('joinRoom', path);
/*  THIS SHOUDL GO IN MAIN.JS EENNNDDDD */

// Sets up Routing
const routes = <Route component={App}>
  <Route path = '/' component={EducatorLanding} />
</Route>;
// const routes = <Route component={App}>
//   <Route path = '/' component={EducatorLanding} />
//   <Route path = '/student' component={StudentContainer} />
//   <Route path = '/educator' component={EducatorContainer} />
// </Route>;

// Renders App to DOM
ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
