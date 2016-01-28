'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 8090;

var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(__dirname, "/../client/dist")));

app.use('/', _router2.default);

var server = app.listen(port, function () {
  console.log('Server listening at port ', port);
});

var io = _socket2.default.listen(server);

io.on('connection', function (socket) {

  socket.on('action', function (action) {
    action.meta.remote = false;
    socket.broadcast.to(socket.room).emit('remoteAction', action);
  });

  socket.on('joinRoom', function (roomname) {
    socket.join(roomname);
    socket.room = roomname;
  });
});