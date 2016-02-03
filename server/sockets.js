import {storeState, retrieveState} from './controllers/redisStateController';
import sendNumUsers from './helpers/sendNumUsers';
import {toJS} from 'immutable';

export default function(io) {
  io.on('connection', (socket) => {

    socket.on('action', (action) => {
      action.meta.remote = false;
      socket.broadcast.to(socket.room).emit('remoteAction', action);
    });

    socket.on('state', (state) => {
      storeState(state);
    });

    socket.on('joinRoom', (roomname) => {
      socket.join(roomname);
      
      socket.room = roomname;
      retrieveState(roomname, (err, appState) => {
        if (err) throw new Error(err);
        socket.emit('syncState', appState);
      });

      let numUsers = io.sockets.adapter.rooms[roomname].length;
      sendNumUsers(numUsers, socket, io);
    });

    socket.on('disconnect', () => {
      if (io.sockets.adapter.rooms[socket.room]) {
        let numUsers = io.sockets.adapter.rooms[socket.room].length;
        sendNumUsers(numUsers, socket, io);
      }
    });

    socket.on('error', (err) => {
      if(err) throw new Error(err);
    });

  });
}
