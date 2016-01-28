'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var roomNumber = 0;

function createRoom() {
  roomNumber++;
  return roomNumber;
}

// base route directs to teacher landing page
router.route('/').get(function (req, res) {
  res.sendfile(__dirname + '/../client/dist/index.html');
});

router.route('/createRoom').get(function (req, res) {
  var number = createRoom();
  res.redirect('/' + number + '?type=host&roomNumber=' + number);
});

router.route('/:roomNumber').get(function (req, res) {
  // conditional to see if it's the host
  var url_parts = _url2.default.parse(req.url, true);
  var query = url_parts.query;
  var isEducator = query.type !== undefined ? true : false;
  if (isEducator) {
    res.sendFile(_path2.default.join(__dirname, "/../client/dist/index.html"));
  } else {
    res.sendFile(_path2.default.join(__dirname, "/../client/dist/index.html"));
  }
});

exports.default = router;