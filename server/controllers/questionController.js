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
    console.log('response from delete', response);
    callback(response);
  });
}

export default {
  createQuestion: createQuestion,
<<<<<<< 03403579c70ab041a45200d08fab4e9390f570e8
=======
  // getAllQuestions: getAllQuestions,
>>>>>>> Write delete route and controllers for questions
  getQuestion: getQuestion,
  deleteQuestion: deleteQuestion
}