import Question from '../models/questions.js';

function createQuestion (params, callback) {
  console.log('in controller!');
  return Question.create({
    prompt: params.prompt,
    presentation_id: params.presentationID,
    question_type: params.questionType,
    answer: params.answer,
    choice_a: params.questionAnswer.a || null,
    choice_b: params.questionAnswer.b || null,
    choice_c: params.questionAnswer.c || null,
    choice_d: params.questionAnswer.d || null,
    choice_e: params.questionAnswer.e || null
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
    };
    let selector = { where: { id: id } };
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
