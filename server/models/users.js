import Sequelize from 'sequelize';

const User = sequelize.define('user', {
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
  freezeTableName: true // Model tableName will be the same as the model name
});