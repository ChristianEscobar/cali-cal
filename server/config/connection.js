// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
const Sequelize = require("sequelize");

const Op = Sequelize.Op;
// const operatorsAliases = {
//   $gt: Op.gt
// }

const database = "calendar_db";
const user = "root";
const password = "password";
const localhost = "localhost";
const dialect = 'mysql';

// Creates mySQL connection using Sequelize
const sequelize = new Sequelize(database, user, localhost, {
  host: localhost,
  dialect: dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  operatorsAliases: false
});

// Exports the connection for other files to use
module.exports = sequelize;
