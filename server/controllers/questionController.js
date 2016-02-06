import Question from '../models/questions.js';

function createQuestion (params, callback) {
  //return callback(params);
  return Question.create({
    prompt: params.prompt,
    presentation_id: params.presentation_id,
    question_type: params.question_type
  })
  .then(function(response){
    callback(response);
  });
}

//get all Questions of a given presentation
function getAllQuestions (params, callback) {
  //let temp = parseInt(params)
  //console.log("PARAMSSSS", typeof temp);
  return Question.findAll({
    attributes: { exclude: ['user_id'] },
    where: {
      owner_id: params
    }
  })
  .then((response) => {
    callback(response);
  });
}

//get Question by id
function getQuestion (params, callback) {
  //let temp = parseInt(params)
  return Question.findAll({
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
  createQuestion: createQuestion,
  getAllQuestions: getAllQuestions,
  getQuestion: getQuestion,
}