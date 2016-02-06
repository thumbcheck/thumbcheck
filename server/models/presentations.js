import Sequelize from 'sequelize';
import User from './users.js';
import {sequelize} from './database.js';
import Session from './sessions.js';

//import User from './users.js';

const Presentation = sequelize.define('presentations', {
  title: {
    type: Sequelize.STRING
  },
  owner_id: {
    // foreign key from presentations
    type: Sequelize.INTEGER
  }
}, {
	timestamps: true,
  underscored: true,
  freezeTableName: true // Model tableName will be the same as the model name
});

Presentation.belongsTo(User);
//Presentation.belongsTo(Sessions);

Presentation.sync()

export default Presentation;
