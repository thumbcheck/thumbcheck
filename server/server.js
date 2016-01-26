import express from 'express';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import path from 'path';

const port = process.env.PORT || 8090;

const app = express();

app.use(express.static(path.join(__dirname, "/../client/dist")));

const server = app.listen(port, ()  => {
  console.log('Server listening at port ', port);
});

var io = socket.listen(server);

io.on('connection', (socket) => {
  socket.emit('state', () => {
    console.log('Emitting State from server!');
  });
  socket.on('action', (data) => {
    console.log('Action heard by server', data);
  });
});

