'use strict';

var _chai = require('chai');

describe('server requests', function () {

  describe('teacher', function () {
    // see if it sends back 200 for teachers
    it('responds with "200 OK" for a GET request for teacher landing page', function () {
      // send http request to [WHATEVER THE URL IS]

      // see if it responds with '200 OK'   
    });

    it('responds with "201 CREATED" and a room name for a POST request to create room', function () {
      // send http request to [WHATEVER THE ROUTE IS for /createRoom]
      // route is POST /room
      // see if it responds with '201 created' and a room name   
    });
  });
});