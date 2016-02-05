import Sequelize from 'sequelize';
import Session from './session.js';

const Sessions_question = sequelize.define('sessions_question', {
  session_id: {
    // foreign key to session
    type: Sequelize.STRING 
  },
	question_id: {
		// foreign key from questions
    type: Sequelize.NUMBER
  },
  question_type_snapshot: {
  	// from question_types table
  	type: Sequelize.NUMBER
  },
  result_thumbs_up: {
    type: Sequelize.NUMBER
  },
  result_thumbs_down: {
    type: Sequelize.NUMBER
  },
  result_a: {
    type: Sequelize.NUMBER
  },
  result_b: {
    type: Sequelize.NUMBER
  },
  result_c: {
    type: Sequelize.NUMBER
  },
  result_d: {
    type: Sequelize.NUMBER
  },
  result_e: {
    type: Sequelize.NUMBER
  },
  result_open_response: {
    type: Sequelize.STRING
  }

}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

