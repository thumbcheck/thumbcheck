import User from '../models/users.js';

function createUser (params, callback) {
  return User.create({
    username: params.username,
    password: params.password,
    name: params.name,
    email: params.email
  })
  .then((response) => {
    callback(response);
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
    console.log(response);
    response ? callback(1) : callback(0);
  });

}

export default {
  createUser: createUser,
  getUser: getUser,
  getAllUsers: getAllUsers
}