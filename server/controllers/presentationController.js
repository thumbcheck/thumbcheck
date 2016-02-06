import Presentation from '../models/presentations.js';

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

//get all presentations of a given user
function getAllPresentations (params, callback) {
  //let temp = parseInt(params)
  //console.log("PARAMSSSS", typeof temp);
  return Presentation.findAll({
    attributes: { exclude: ['user_id'] },
    where: {
      owner_id: params
    }
  })
  .then((response) => {
    callback(response);
  });
}

//get presentation by id
function getPresentation (params, callback) {
  //let temp = parseInt(params)
  return Presentation.findAll({
    attributes: { exclude: ['user_id'] },
    where: {
      //owner_id: params.owner_id,
      id: params
    }
  })
  .then((response) => {
    callback(response);
  });
}

export default {
  createPresentation: createPresentation,
  getAllPresentations: getAllPresentations,
  getPresentation: getPresentation,
}