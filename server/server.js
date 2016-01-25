import Server from 'socket.io';

const startServer = function() {
  var io = new Server().attach(8090);

  io.on('connection', (socket) => {
    socket.emit('state', () => {
      console.log('Emitting State from server!');
    });
    socket.on('action', (data) => {
      console.log('Action heard by server', data);
    });
  });
};

startServer();
console.log('Listening on port 8090');
