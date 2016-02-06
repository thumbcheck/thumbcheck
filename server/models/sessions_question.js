import Sequelize from 'sequelize';
import {sequelize} from './database.js';
import Session from './sessions.js';

const Sessions_question = sequelize.define('sessions_question', {
  session_id: {
    // foreign key to session
    type: Sequelize.STRING 
  },
	question_id: {
		// foreign key from questions
    type: Sequelize.INTEGER
  },
  question_type_snapshot: {
  	// from question_types table
  	type: Sequelize.INTEGER
  },
  result_thumbs_up: {
    type: Sequelize.INTEGER
  },
  result_thumbs_down: {
    type: Sequelize.INTEGER
  },
  result_a: {
    type: Sequelize.INTEGER
  },
  result_b: {
    type: Sequelize.INTEGER
  },
  result_c: {
    type: Sequelize.INTEGER
  },
  result_d: {
    type: Sequelize.INTEGER
  },
  result_e: {
    type: Sequelize.INTEGER
  },
  result_open_response: {
    type: Sequelize.STRING
  }

}, {
  timestamps: true,
  underscored: true,
  freezeTableName: true // Model tableName will be the same as the model name
});

export default Sessions_question;
