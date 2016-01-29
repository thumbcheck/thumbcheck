import express from 'express';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import path from 'path';
import router from './router';
import {toJS} from 'immutable';
import redisStateController from './controllers/redisStateController';

const port = process.env.PORT || 8090;

const app = express();

app.use(express.static(path.join(__dirname, "/../client/dist")));

app.use('/', router);

const server = app.listen(port, ()  => {
  console.log('Server listening at port ', port);
});

var io = socket.listen(server);

io.on('connection', (socket) => {

  socket.on('action', function(action) {
    action.meta.remote = false;
    socket.broadcast.to(socket.room).emit('remoteAction', action);
  });

  socket.on('state', function(state) {
    // redisStateController(state);
  });

  socket.on('joinRoom', (roomname) => {
    socket.join(roomname);
    socket.room = roomname;
  });

});
