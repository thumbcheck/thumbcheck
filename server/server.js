import express from 'express';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import path from 'path';
import router from './router';
import {toJS} from 'immutable';
import sendNumUsers from './helpers/sendNumUsers';
import {storeState, retrieveState} from './controllers/redisStateController';

const port = process.env.PORT || 8090;

const app = express();

app.use(express.static(path.join(__dirname, "/../client/dist")));

app.use('/', router);

const server = app.listen(port, ()  => {
  console.log('Server listening at port ', port);
});

var io = socket.listen(server);

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
