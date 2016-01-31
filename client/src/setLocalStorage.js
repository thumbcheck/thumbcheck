import React from 'react';

// necessary??
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function canWriteLocalStorage() {
    try {
      localStorage.setItem('a', 'a');
      localStorage.removeItem('a');
      return true;
    } catch (exception) {
      return false;
    }
}
export default function(moveToState, store) {
  const path = window.location.pathname.slice(1);
  let stateAddition = {};
  if(canWriteLocalStorage()) {
    window.localStorage.setItem('room', path);
    if (path && getParameterByName('type')) {
      // teacher in the room
      stateAddition.userType = 'educator';
      window.localStorage.setItem('userType', 'educator');
      // console.log('teacher in room')
    } else if (path[0]) {
      // student in the room
      stateAddition.userType = 'student';
      window.localStorage.setItem('userType', 'student');
      // console.log('student in room')
    } else {
      // teacher on the home page
      stateAddition.userType = '';
      window.localStorage.setItem('userType', '');
      // console.log('teacher on home page')
    }    
  }
  if (moveToState) {     
    store.dispatch({
      type: 'SET_STATE',
      state: {currentRoom: path, userType: stateAddition.userType }
    }); 
  }
  return path;
}
