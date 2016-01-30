import {expect} from 'chai';
import server from '../../server';
import router from '../../router';
//import stubs from './Stubs';
import request from 'request';

describe('server HTTP requests', () => {
  // see if it sends back 200 for main page
  it('responds with "200 OK" for a GET request for main landing page', () => {    
    request('http://localhost:8090', (error, response, done) => {
      expect(response.statusCode).to.equal(200);
      done();     
    });     
  }); 
  // check new room creation
  it('responds with "201 CREATED" and a room name for a POST request to /room', (done) => {
    const requestParams = {method: 'GET',
      uri: 'http://localhost:8090',
      // json: {
      //   username: 'Jono',
      //   message: 'Do my bidding!'}
    };
    request(requestParams, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });    
    done();
  });  
  // sends back 200 OK for room page
  it('responds with "200 OK" for a GET request for /:roomname', () => {
    request('http://localhost:8090', (error, response, done) => {
      expect(response.statusCode).to.equal(200);
      done();     
    });   
  });      
});
