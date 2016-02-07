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
import {checkRoom} from './controllers/redisStateController';

const router = express.Router();

function createRoom () {
  checkRoom(generateRoomName(), (result, room) => {
    if (result) {return room;}
    // if it's not a novel room, call it again
    else {createRoom();}  
    return;  
  })
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

router.route('/api/users')
  .post((req,res) => {
    userController.createUser(req.body, (result) => {
      res.send(201, result);
    });
  })
  .get((req,res) => {
    userController.getAllUsers((result) => {
      res.send(302, result);
    });
  })

router.route('/api/users/:username')
  .get((req,res) => {
    userController.getUser(req.params.username, (result) => {
      res.send(302, result);
    });
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
      res.send(302, result);
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

//delete a particular question by question ID
router.route('/api/questions/:qid')
  .delete((req,res) => {
    questionController.deleteQuestion(req.params.qid, (result) => {
      res.send(201, result);
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
        res.send(302, result);
      });
    });

//get presentation by presentation id
router.route('/api/presentations/:pid')
  .get((req,res) => {
    presentationController.getPresentation(req.params.pid, (result) => {
      res.send(302, result);
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
