import express from 'express';
import bodyParser from 'body-parser';
import url from 'url';
import app from './server';
import path from 'path';
import randomWord from 'random-word';
import generateRoomName from './helpers/generateRoomName';
import passport from 'passport';
import userController from './controllers/userController';
import sessionsController from './controllers/sessionsController';
import questionController from './controllers/questionController';
import presentationController from './controllers/presentationController';
import jwt from 'jwt-simple';
import {checkRoom, deleteRoom} from './controllers/redisStateController';

const router = express.Router();
const tokenSecret = 'shhhh baby es ok';

function createRoom (cb) {
  checkRoom(generateRoomName(), (result, room) => {
    if (!result) { cb(room);}
    // if it's not a novel room, call it again
    else { return createRoom(cb); }
  })
}

// base route directs to teacher landing page
router.route('/')
  .get((req, res) => {
    res.sendFile(__dirname + '/../client/dist/index.html');
  });

router.route('/room')
  .post((req, res) => {
    createRoom((roomName) => {
      res.send(roomName+'?type=host');
    });
  });

router.route('/login')
  .post((req,res,next) => {
    userController.getUser(req.body, (result) => {
      const token = jwt.encode({ username: req.body.username, educator_id: result.educator_id }, tokenSecret);
      if (result.found) {
        res.cookie('remember', token, { maxAge: 7200000 })
      }
      console.log('RESULT FROM DATABSE!!!!!!!!',result)
      res.send(200, result);
    });
  });

router.route('/logout')
  .post((req,res) => {
    deleteRoom(req.body.roomname, () => {
    res.clearCookie('remember');
    res.send(200, 'logged out');
    });
  });


//creates new users
router.route('/api/users')
  .post((req,res) => {
    console.log('in api users post', req.body);
    userController.createUser(req.body, (result) => {
      const token = jwt.encode({ username: req.body.username, educator_id: result.educator_id }, tokenSecret);
      console.log('IN USER CREATION', result.status);
      if (result.status === 'Account created') {
        res.cookie('remember', token, { maxAge: 7200000 })
      }
      res.send(201, result);
    });
  })
  .get((req,res) => {
    userController.getAllUsers((result) => {
      res.send(200, result);
    });
  });

//calling this route decodes the cookie of the user
//returns the username and educator_id
router.route('/api/userid')
  .post((req,res) => {
    const decoded = jwt.decode(req.body.cookies, tokenSecret);
    console.log('DECODED IN SERVER', decoded, decoded.educator_id);
    res.send(200, {'educator_id': decoded.educator_id, 'username': decoded.username});
  })

//post new questions
router.route('/api/questions')
  .post((req,res) => {
    questionController.createQuestion(req.body, (result) => {
      res.send(201, result);
    });
  })

//get a particular question by question ID
router.route('/api/questions/:qid')
  .get((req,res) => {
    questionController.getQuestion(req.params.qid, (result) => {
      res.send(200, result);
    });
  });

//update/edit a question
//returns a '1' if the record was found and updated
//returns a '0' if no record was updated
router.route('/api/questions/:qid')
  .put((req,res) => {
    questionController.updateQuestion(req.body, req.params.qid, (result) => {
      res.send(200, result);
    });
  });

//delete a particular question by question ID
//response will be '1' if the record was found and deleted
//response will be '0' if no record was found/deleted
router.route('/api/questions/:qid')
  .delete((req,res) => {
    questionController.deleteQuestion(req.params.qid, (result) => {
      res.send(200, result);
    });
  });

//post new presentations
router.route('/api/presentations')
  .post((req,res) => {
    presentationController.createPresentation(req.body, (result) => {
      res.send(201, result);
    });
  })

//get all the presentation of a given user
router.route('/api/presentations/users/:userid')
  .get((req,res) => {
      presentationController.getAllPresentations(req.params.userid, (result) => {
        res.send(200, result);
      });
    });

//get presentation by presentation id
router.route('/api/presentations/:pid')
  .get((req,res) => {
    presentationController.getPresentation(req.params.pid, (result) => {
      res.send(200, result);
    });
  });

//update/edit a presentation
//returns a '1' if the record was found and updated
//returns a '0' if no record was updated
router.route('/api/presentations/:pid')
  .put((req,res) => {
    presentationController.updatePresentation(req.body, req.params.pid, (result) => {
      res.send(200, result);
    });
  });

//delete a particular presentation by presentation ID
//also deletes all related questions
//response will be '1' if the record was found and deleted
//response will be '0' if no record was found/deleted
router.route('/api/presentations/:pid')
  .delete((req,res) => {
    presentationController.deletePresentation(req.params.pid, (result) => {
      res.send(200, result);
    });
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

// ----- PRESENTATION SESSIONS  ------ //
// get all the sessions for a specific presentation
router.route('/api/sessions/:presentation_id')
  .get((req, res) => {
    sessionsController.getSessions((req.params.presentation_id), (result) => {
      res.send(200, result);
    })
  })
  // create a new session
router.route('/api/sessions')
  .post((req, res) => {
    sessionsController.createSession((req.body), (result) => {
      res.send(201, result);
    })
  })
// ----- SESSION_QUESTIONS  ------ //
// get all questions for a specific session
router.route('/api/sessionsQuestions/:session_id')
  .get((req, res) => {
    sessionsController.getSessions((req.body.session_id), (result) => {
      res.send(200, result);
    })
  })
  // create a new question for a specific session
router.route('/api/sessionsQuestions')
  .post((req, res) => {
    sessionsController.createSession((req.body), (result) => {
      res.send(201, result);
    })
  })

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

export default router;
