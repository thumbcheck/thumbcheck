import express from 'express';
import bodyParser from 'body-parser';
import url from 'url';
import app from './server';
import path from 'path';
import randomWord from 'random-word';

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
  .get((req, res) => {
    const roomName = createRoom();
    res.redirect(`/${roomName}?type=host&roomName=${roomName}`);
  });

router.route('/:roomname')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "/../client/dist/index.html"));
  });

  export default router;
