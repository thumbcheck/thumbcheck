import Sequelize from 'sequelize';
import Presentation from './presentation.js';
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
  }
}, {
  timestamps: true,
  underscored: true,
  freezeTableName: true // Model tableName will be the same as the model name
});

//Question.belongsTo(Presentation);
//Question.belongsTo(Sessions_question);

Question.sync()

export default Question;
