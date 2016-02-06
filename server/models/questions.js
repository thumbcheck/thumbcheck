import Sequelize from 'sequelize';
import Presentation from './presentations.js';
import {sequelize} from './database.js';

const Question = sequelize.define('questions', {
  prompt: {
    type: Sequelize.STRING
  },
	presentation_id: {
		// foreign key from presentations
    type: Sequelize.INTEGER
  },
  question_type: {
  	// from question_types table
  	type: Sequelize.INTEGER
  },
  answer: {
    // from question_types table
    type: Sequelize.STRING
  },
  choice_a: {
    // from question_types table
    type: Sequelize.STRING
  },
  choice_b: {
    // from question_types table
    type: Sequelize.STRING
  },
  choice_c: {
    // from question_types table
    type: Sequelize.STRING
  },
  choice_d: {
    // from question_types table
    type: Sequelize.STRING
  },
  choice_e: {
    // from question_types table
    type: Sequelize.STRING
  }
}, {
  timestamps: true,
  underscored: true,
  freezeTableName: true // Model tableName will be the same as the model name
});

Question.belongsTo(Presentation);
//Question.belongsTo(Sessions_question);

Question.sync()

export default Question;
