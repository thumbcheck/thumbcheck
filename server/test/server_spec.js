import {expect} from 'chai';

describe('server requests', () => {

  describe('teacher', () => {
    // see if it sends back 200 for teachers
    it('responds with "200 OK" for a GET request for teacher landing page', () => {
      // send http request to [WHATEVER THE URL IS]

      // see if it responds with '200 OK'    
    }); 

    it('responds with "201 CREATED" and a room name for a POST request to create room', () => {
      // send http request to [WHATEVER THE ROUTE IS for /createRoom]
      // route is POST /room
      // see if it responds with '201 created' and a room name    
    });      
  })

});
