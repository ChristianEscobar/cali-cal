// module.exports = function(sequelize, DataTypes) {
//   const User = sequelize.define('User', {
//     id: DataTypes.INTEGER
//   })
// }


// Pull in Sequelize package
const Sequelize = require('sequelize');

// Reference our connection to the database
const sequelize = require('../config/connection.js');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  taskId: {
    type: Sequelize.INTEGER,
    references: {
      model: Task,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  }
});

// sync with DB
User.sync();

module.exports = User;