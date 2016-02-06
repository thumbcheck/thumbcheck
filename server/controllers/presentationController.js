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

export default {
  createPresentation: createPresentation
}