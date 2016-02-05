import express from 'express';
import bodyParser from 'body-parser';
import url from 'url';
import app from './server';
import path from 'path';
import randomWord from 'random-word';
import generateRoomName from './helpers/generateRoomName';
import passport from 'passport';

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

//*** THESE ARE PLACEHOLDER TEST ITEMS ***//
// router.route('/logintest')
//   .get((req,res) => {
//     res.sendFile(path.join(__dirname, "../client/dist/testLogin.html"));
//   });
// router.route('/success')
//   .get((req,res) => {
//     res.sendFile(path.join(__dirname, "../client/dist/success.html"));
//   });

// router.route('/fail')
//   .get((req,res) => {
//     res.sendFile(path.join(__dirname, "../client/dist/fail.html"));
//   });

router.route('/login')
  .get((req,res) => {
    res.sendFile(path.join(__dirname, "../client/dist/testLoginForm.html"));
  })
  .post((req,res,next) => {
    return passport.authenticate('local-login', {successRedirect: '/success', failureRedirect: '/fail'})(req,res, next);
  });

router.route('/signup')
  .get((req,res,next) => {
    return passport.authenticate('local-success', {successRedirect: '/success', failureRedirect: '/fail'})(req,res, next);
    // res.sendFile(path.join(__dirname, "../client/dist/testLoginSignupForm.html"));
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

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

  export default router;
