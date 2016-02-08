import Presentation from '../models/presentations.js';
import Question from '../models/questions.js';

function createPresentation (params, callback) {
  return Presentation.create({
    title: params.title,
    educator_id: params.educator_id
  })
  .then(function(response){
    callback(response);
  });
}

//get all presentations of a given user
function getAllPresentations (params, callback) {
  return Presentation.findAll({
    attributes: { exclude: ['user_id'] },
    where: {
      educator_id: params
    }
  })
  .then((response) => {
    callback(response);
  });
}

//get presentation by id
function getPresentation (params, callback) {
  return Presentation.findAll({
    attributes: { exclude: ['user_id'] },
    where: {
      id: params
    }
  })
  .then((response) => {
    let presentation_id = response[0].dataValues.id;
    let presentation = response[0].dataValues;
    return Question.findAll({
      attributes: { exclude: ['user_id'] },
      where: {
        presentation_id: params
      }
    })
    .then((response) => {
      callback({presentation: presentation, questions: response});
    });
  });
}

//update a presentation
function updatePresentation (params, id, callback) {
  let values = { title: params.title };
  let selector = { where: { id: id } };
  return Presentation.update(values, selector)
  .then((response) => {
    callback(response);
  });
}

//delete presentation and all related questions
function deletePresentation (params, callback) {
  return Question.destroy({
    attributes: { exclude: ['user_id'] },
    where: {
      presentation_id: params
    }
  })
  .then((response) => {
    return Presentation.destroy({
      attributes: { exclude: ['user_id'] },
      where: {
        id: params
      }
    })
    .then((response) => {
      callback(response);
    });
  });
}

export default {
  createPresentation: createPresentation,
  getAllPresentations: getAllPresentations,
  getPresentation: getPresentation,
  updatePresentation: updatePresentation,
  deletePresentation: deletePresentation
}
