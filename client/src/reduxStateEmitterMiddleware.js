export default socket => store => next => action => {
  console.log('in middleware', action);
  if (action.meta && action.meta.remote) { // so SET_STATE infinite loop isn't triggered and is only set on cleint side
    console.log('emitted action');
    socket.emit('action', action);

  }
  return next(action);
};
