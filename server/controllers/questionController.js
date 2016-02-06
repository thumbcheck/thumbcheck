import Question from '../models/questions.js';

function createQuestion (params, callback) {
  //return callback(params);
  return Question.create({
    prompt: params.prompt,
    presentation_id: params.presentation_id,
    question_type: params.question_type,
    answer: params.answer,
    choice_a: params.choice_a,
    choice_b: params.choice_b,
    choice_c: params.choice_c,
    choice_d: params.choice_d,
    choice_e: params.choice_e
  })
  .then(function(response){
    callback(response);
  });
}

//get all Questions of a given presentation
// function getAllQuestions (params, callback) {
//   return Question.findAll({
//     attributes: { exclude: ['user_id'] },
//     where: {
//       presentation_id: params
//     }
//   })
//   .then((response) => {
//     callback(response);
//   });
// }

//get Question by id
function getQuestion (params, callback) {
  return Question.findAll({
    attributes: { exclude: ['user_id'] },
    where: {
      id: params
    }
  })
  .then((response) => {
    callback(response);
  });
}

//delete individual questions
function deleteQuestion (params, callback) {
  return Question.destroy({
    attributes: { exclude: ['user_id'] },
    where: {
      id: params
    }
  })
  .then((response) => {
    callback(response);
  });
}

export default {
  createQuestion: createQuestion,
  // getAllQuestions: getAllQuestions,
  getQuestion: getQuestion,
  deleteQuestion: deleteQuestion
}