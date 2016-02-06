import Sequelize from 'sequelize';
import {sequelize} from './database.js';
import Presentation from './presentations.js';

const Session = sequelize.define('session', {
  presentation_id: {
    type: Sequelize.INTEGER
  },
	identifier: {
		// foreign key from presentations
    type: Sequelize.STRING
  }  
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

// Session.belongsTo(Sessions_question);

Session.sync();

export default Session;