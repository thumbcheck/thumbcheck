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
  return Question.find({
    attributes: { exclude: ['user_id'] },
    where: {
      id: params
    }
  })
  .then((response) => {
    let prompt = response[0].dataValues.prompt;
    let question_type = response[0].dataValues.question_type;
    let answer = response[0].dataValues.answer;
    let choice_a = response[0].dataValues.choice_a;
    let choice_b = response[0].dataValues.choice_b;
    let choice_c = response[0].dataValues.choice_c;
    let choice_d = response[0].dataValues.choice_d;
    let choice_e = response[0].dataValues.choice_e;

    console.log('in updateQuestion', prompt, question_type, choice_a);
    // return Question.findAll({
    //   attributes: { exclude: ['user_id'] },
    //   where: {
    //     presentation_id: params
    //   }
    // })
    // .then((response) => {
    //   callback({presentation: presentation, questions: response});
    // });
  });





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
  deleteQuestion: deleteQuestion
}