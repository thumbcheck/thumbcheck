import express from 'express';
import bodyParser from 'body-parser';
import url from 'url';
import app from './server';
import path from 'path';
import randomWord from 'random-word';

import {checkRoom} from './controllers/redisStateController'

const router = express.Router();

function createRoom () {
  return randomWord();
}

// base route directs to teacher landing page
router.route('/')
  .get((req, res) => {
    res.sendFile(__dirname + '/../client/dist/index.html');
  });

router.route('/room')
  .post((req, res) => {
    const roomName = createRoom();
    res.send(roomName+'?type=host');
  });

router.route('/:roomname')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "/../client/dist/index.html"));
  });

router.route('/:roomname')
  .post((req, res) => {
    console.log('recieved Post Request')
    checkRoom(req.params, (boolean) => {
      console.log("in checkRoom", boolean)
      return boolean;
    });
    //res.sendFile(path.join(__dirname, "/../client/dist/index.html"));
  });

  export default router;
