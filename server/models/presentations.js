import Sequelize from 'sequelize';
import User from './user.js';

const Presentation = sequelize.define('presentation', {
  title: {
    type: Sequelize.STRING 
  },
  owner_id: {
    // foreign key from users
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Presentation.belongsTo(User);
Presentation.belongsTo(Sessions);
    