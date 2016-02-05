import Sequelize from 'sequelize';
import Presentation from './presentation.js';

const Session = sequelize.define('session', {
  presentation_id: {
    type: Sequelize.NUMBER
  },
	identifer: {
		// foreign key from presentations
    type: Sequelize.STRING
  },
  date: {
  	// from question_types table
  	type: Sequelize.DATE,
    defaultValue: Date.now()
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Session.belongsTo(Sessions_question);