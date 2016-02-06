import Presentation from '../models/presentations.js';

function getPresentation(params, callback) {

}

function createPresentation (params, callback) {
  //return callback(params);
  return Presentation.create({
    title: params.title,
    owner_id: params.owner_id
  })
  .then(function(response){
    callback(response);
  });
}

function getAllPresentations (params, callback) {
  return User.findAll({
    where: {
      owner_id: params
    }
  })
  .then((response) => {
    callback(response);
  });
}

function getPresentation (params, callback) {
  return User.findAll({
    where: {
      owner_id: params.owner_id,
      id: params.id
    }
  })
  .then((response) => {
    callback(response);
  });
}

export default {
  createPresentation: createPresentation,
  getPresentation: getPresentation
}