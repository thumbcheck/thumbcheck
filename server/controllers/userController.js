import User from '../models/users.js';

function createUser (params, callback) {
  let username = params.username;
  let password = params.password;
  let name = params.name;
  let email = params.email;

  return User.findAll({
    where: {
      username: username
    }
  })
  .then((response) => {
    //if username already exist reponse.length will be > 0
    if(response.length){
      callback({'status': 'taken'});
    } else {
      return User.create({
        username: params.username,
        password: params.password,
        name: params.name,
        email: params.email
      })
      .then((response) => {
        callback({'status': 'Account created'});
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
      password: params.password
    }
  })
  .then((response) => {
    console.log('response from database', response[0]);
    let username = response[0] || 'not authorized';
    response.length ? callback(1) : callback(0);
  });

}

export default {
  createUser: createUser,
  getUser: getUser,
  getAllUsers: getAllUsers
}