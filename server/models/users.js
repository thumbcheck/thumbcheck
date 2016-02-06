import Sequelize from 'sequelize';
import {sequelize} from './database.js';

const User = sequelize.define('users', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }  
}, {
  timestamps: true,
  underscored: true,
  freezeTableName: true // Model tableName will be the same as the model name
});

//syncs up sequelize with the database
// User.sync();

export default User;