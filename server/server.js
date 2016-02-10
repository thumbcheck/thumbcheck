import express from 'express';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import path from 'path';

import database from './models/database.js';
import router from './router';
import sockets from './sockets';
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const port = process.env.PORT || 8090;

const app = express();

app.use(express.static(path.join(__dirname, "/../client/dist")));

//*** NEW STUFF (LOGIN) ***//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret: 'kylecho'}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(id, done) {
  done(null, id);
});
//*** END NEW STUFF (LOGIN) ***//

app.use('/', router);

//*** NEW STUFF (LOGIN) ***//
passport.use('local-login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
 function(req,username, password, done) {
  // PLACEHOLDER: ADD DB QUERY HERE
  if (email === 'mark' && password === 'hi') {
    return done(null, {
      email: email,
      password: password
    });
  } else {
    return done(null, false);
  }
}));
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
 function(req,username, password, done) {
  // PLACEHOLDER: ADD DB QUERY HERE
  if (email === 'mark' && password === 'hi') {
    return done(null, {
      email: email,
      password: password
    });
  } else {
    return done(null, false);
  }
}));
//*** END NEW STUFF (LOGIN) ***//


const server = app.listen(port, ()  => {
  console.log('Server listening at port ', port);
});


var io = socket.listen(server);
sockets(io);

