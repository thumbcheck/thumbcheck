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

//update a presentation
function updateQuestion (params, id, callback) {
  return Question.findAll({
    attributes: { exclude: ['user_id'] },
    where: {
      id: id
    }
  })
  .then((response) => {
    let values = {
      prompt: params.prompt || response[0].dataValues.prompt,
      question_type: params.question_type || response[0].dataValues.question_type,
      answer: params. answer || response[0].dataValues.answer,
      choice_a: params.choice_a || response[0].dataValues.choice_a,
      choice_b: params.choice_b || response[0].dataValues.choice_b,
      choice_c: params.choice_c || response[0].dataValues.choice_c,
      choice_d: params.choice_d || response[0].dataValues.choice_d,
      choice_e: params.choice_e || response[0].dataValues.choice_e
    }
    let selector = { where: { id: id } };
    console.log('in updateQuestion', values);
    return Question.update(values, selector)
    .then((response) => {
      callback(response);
    });
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
  getQuestion: getQuestion,
  updateQuestion: updateQuestion,
  deleteQuestion: deleteQuestion
}