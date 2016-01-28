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

router.route('/createRoom')
  .get((req, res) => {
    const roomName = createRoom();
    res.redirect(`/${roomName}?type=host&roomName=${roomName}`);
  });

router.route('/:roomname')
  .get((req, res) => {
    // conditional to see if it's the host
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query;
    const isEducator = query.type !== undefined ? true : false;
    if (isEducator) {
      res.sendFile(path.join(__dirname, "/../client/dist/index.html"));
    } else {
      res.sendFile(path.join(__dirname, "/../client/dist/index.html"));
    }
  });

  export default router;
