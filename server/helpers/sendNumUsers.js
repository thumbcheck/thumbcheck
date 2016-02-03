import socket from 'socket.io';

export default function(numUsers, socket, io) {
  let newAppState = {
    meta: {remote: true},
    type: 'SET_NUMUSERS',
    numUsers: numUsers
  };
  io.sockets.in(socket.room).emit('syncState', newAppState);
}
