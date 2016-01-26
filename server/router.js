import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

var roomNumber = 0;

function createRoom () {
  const room = 'room' + roomNumber;
  roomNumber++;
  return room;
}

router.route('/rooms')
  .post((req, res) => {
    res.status(201).json(createRoom());
  });

router.route(/room\d+/)
  .get((req, res) => {
    res.send(req.url.substr(1));
  })

router.route('/lobby')
  .get((req, res) => {
    console.log(lobby);
  })

module.exports = router;