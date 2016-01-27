import express from 'express';
import bodyParser from 'body-parser';
import url from 'url';
import app from './server';
import path from 'path';

const router = express.Router();


var roomNumber = 0;

function createRoom () {
  roomNumber++;
  return roomNumber;
}

// base route directs to teacher landing page
router.route('/')
  .get((req, res) => {
    res.sendfile(__dirname + '/../client/dist/index.html');
  })
router.route('/whatever')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "/../client/dist/index.html"));
  })

router.route('/createRoom')
  .get((req, res) => {
    const number = createRoom();
    res.redirect(`/${number}?type=host&roomNumber=number`);
  });

router.route('/:roomNumber')
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
  })

  export default router;
