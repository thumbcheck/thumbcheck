import User from '../models/users.js';



function createUser (params, callback) {
    return User.create({
      username: params.username,
      password: params.password,
      name: params.name,
      email: params.email
    })
    .then(function(response){
      callback(response);
    });

}

export default {
  createUser: createUser
}