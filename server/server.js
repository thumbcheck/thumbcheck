import express from 'express';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import path from 'path';
import router from './router';
import {toJS} from 'immutable';
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
    console.log("Folks in room:", io.sockets.adapter.rooms[roomname].length);
    

    socket.room = roomname;
    retrieveState(roomname, (err, appState) => {
      if (err) throw new Error(err);
      socket.emit('syncState', appState);
    });

    let numUsers = io.sockets.adapter.rooms[roomname].length;
    var sendNumUsers = (numUsers, socket) => {
      let newAppState = {
        meta: {remote: true},
        type: 'SET_NUMUSERS',
        numUsers: numUsers
      };
      // socket.emit('syncState', newAppState);
      // socket.broadcast.to(socket.room).emit('syncState', newAppState);
      io.sockets.in(socket.room).emit('syncState', newAppState);
    };
    sendNumUsers(numUsers, socket);
  });

  socket.on('disconnect', () => {
    console.log("WE DISCONNECTED:", socket);
    console.log("WE DISCONNECTED:", socket.room);
    if (io.sockets.adapter.rooms[socket.room]) {
      let numUsers = io.sockets.adapter.rooms[socket.room].length;
      var sendNumUsers = (numUsers, socket) => {
        let newAppState = {
          meta: {remote: true},
          type: 'SET_NUMUSERS',
          numUsers: numUsers
        };
        // socket.emit('syncState', newAppState);
        // socket.broadcast.to(socket.room).emit('syncState', newAppState);
        io.sockets.in(socket.room).emit('syncState', newAppState);
      };
      sendNumUsers(numUsers, socket);
      console.log("TARGET:", io.sockets.adapter.rooms[socket.room]);
      console.log("post-disconnect, folks in room:", io.sockets.adapter.rooms[socket.room].length);
    }
  });

  socket.on('error', (err) => {
    if(err) throw new Error(err);
  });

});
