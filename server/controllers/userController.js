import User from '../models/users.js';
import bcrypt from 'bcrypt-nodejs';

function createUser (params, callback) {
  let password = params.password;

  bcrypt.hash(params.password, null, null, function(err, hash) {
      console.log('MY HASH', hash);
      password = hash;
  });

  return User.findAll({
    where: {
      username: params.username
    }
  })
  .then((response) => {
    //if username already exist reponse.length will be > 0
    if(response.length){
      callback({'status': 'taken'});
    } else {
      return User.create({
        username: params.username,
        password: password,
        name: params.name,
        email: params.email
      })
      .then((response) => {
        console.log('RESPONSE IN USER CREATION', response);
        callback({'status': 'Account created', 'educator_id':response.dataValues.id});
      });
    }
  });
}

function getAllUsers (callback) {
  return User.findAll({
  })
  .then((response) => {
    callback(response);
  });
}

function getUser (params, callback) {
  return User.findAll({
    where: {
      username: params.username,
    }
  })
  .then((response) => {
    if(response.length){
      const educator_id = response[0].dataValues.id;
      bcrypt.compare(params.password, response[0].dataValues.password, function(err, response) {
        if(response){
          callback({'found': 1, 'educator_id':educator_id});
        } else {
          callback({found: 0});
        }
      });
    } else {
      callback({found: 0});
    }
  });
}

export default {
  createUser: createUser,
  getUser: getUser,
  getAllUsers: getAllUsers
}