import express from 'express';
import bodyParser from 'body-parser';
import url from 'url';
import app from './server';
import path from 'path';
import randomWord from 'random-word';
import generateRoomName from './helpers/generateRoomName';

import {checkRoom} from './controllers/redisStateController';

const router = express.Router();

function createRoom () {
  // return randomWord();
  return generateRoomName();
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
    checkRoom(req.params.roomname, (boolean) => {
      res.send(boolean);
    });
  });

  export default router;
