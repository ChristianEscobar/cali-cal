// Pull in Sequelize package
const Sequelize = require('sequelize');

// Reference our connection to the database
const sequelize = require('../config/connection.js');

// create a 'Task' model
const Task = sequelize.define('task', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      // This is a reference to another model
      model: User,
      // This is the column name of the referenced model
      key: 'id',
      // This declares when to check the foreign key constraint. PostgreSQL only.
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  event: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  startDate: {
    type: Sequelize.DATEONLY,
    // allowNull: false
  },
  endDate: {
    type: Sequelize.DATEONLY,
    // allowNull: false
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

// sync with DB
Task.sync();

module.exports = Task;