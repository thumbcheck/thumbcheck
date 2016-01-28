function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export default function() {
  const path = window.location.pathname.slice(1);
  // console.log(path);
  window.localStorage.setItem('room', path);
  if (path && getParameterByName('type')) {
    // teacher in the room
    window.localStorage.setItem('userType', 'educator');
    // console.log('teacher in room')
  } else if (path[0]) {
    // student in the room
    window.localStorage.setItem('userType', 'student');
    // console.log('student in room')
  } else {
    // teacher on the home page
    window.localStorage.setItem('userType', '');
    // console.log('teacher on home page')
  }
  return path;
}
