import express from 'express';
import bodyParser from 'body-parser';});

import io from './server'

const router = express.Router();

var roomNumber = 0;

function createRoom () {
  const room = 'room' + roomNumber;
  roomNumber++;
  return room;
}

router.route('/room')
  .post((req, res) => {
    const room = createRoom()
    res.redirect(room+'/host/')
  });

router.route(/room\d+\/host/)
  .get((req, res) => {
    res.send('teacher route :'+ req.url.substr(1,5));
  })

router.route(/room\d+/)
  .get((req, res) => {
    res.send(req.url.substr(1));
  })

router.route('/lobby')
  .get((req, res) => {
    console.log(lobby);
  })

module.exports = router;