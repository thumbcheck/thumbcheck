export default socket => store => next => action => {
  if (action.meta && action.meta.remote) { // so SET_STATE infinite loop isn't triggered and is only set on client side
    socket.emit('action', action);
  }
  return next(action);
};
