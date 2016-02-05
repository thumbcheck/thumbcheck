import Sequelize from 'sequelize';
import Presentation from './presentation.js';

const Question = sequelize.define('question', {
  prompt: {
    type: Sequelize.STRING 
  },
	presentation_id: {
		// foreign key from presentations
    type: Sequelize.NUMBER
  },
  question_type: {
  	// from question_types table
  	type: Sequelize.NUMBER
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Question.belongsTo(Presentation);
Question.belongsTo(Sessions_question);
    