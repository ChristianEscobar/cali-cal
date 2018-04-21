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

const options = {
  dialect: dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  operatorsAliases: false
};

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, options);
} else {
  sequelize = new Sequelize(database, user, localhost, options);
}

// Creates mySQL connection using Sequelize

// Exports the connection for other files to use
module.exports = sequelize;
