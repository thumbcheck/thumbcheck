import express from 'express';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import path from 'path';
import router from './router';
import makeStore from './src/store';
import {toJS} from 'immutable';

// const store = makeStore();

const port = process.env.PORT || 8090;

const app = express();

app.use(express.static(path.join(__dirname, "/../client/dist")));

app.use('/', router);

const server = app.listen(port, ()  => {
  console.log('Server listening at port ', port);
});

let room = '';

var io = socket.listen(server);

// store.subscribe(
//   () => io.emit('state', store.getState().toJS())
// );

io.on('connection', (socket) => {
  // console.log('Emitting State from server!', store.getState().toJS());

  //socket.emit('state', store.getState().toJS());

  socket.on('action', function(action) {
    action.meta.remote = false;
    console.log(action, 'action');
    socket.broadcast.to(socket.room).emit('remoteAction', action);
  });

  socket.on('joinRoom', (roomname) => {
    console.log(' socket room:', socket.room);
    socket.join(roomname);
    socket.room = roomname;
    console.log(socket.room);
    room = socket.room;
    console.log("room joined");
  });

  // socket.on('startVote', (voteState) => {
  //   io.to(socket.room).emit('startVote', voteState);
  // });

  // socket.on('endVote', (voteState) => {
  //   io.to(socket.room).emit('endVote', voteState);
  // });

  socket.on('vote', (voteData) => {
    console.log('yes');
    io.to(socket.room).emit('newVotes', voteData);
  });

});
