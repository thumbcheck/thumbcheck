import express from 'express';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import path from 'path';
import router from './router';
import sockets from './sockets';

const port = process.env.PORT || 8090;

const app = express();

app.use(express.static(path.join(__dirname, "/../client/dist")));

app.use('/', router);

const server = app.listen(port, ()  => {
  console.log('Server listening at port ', port);
});


var io = socket.listen(server);
sockets(io);

