require('dotenv').config();

const { Sequelize } = require('sequelize');

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  dialect: DB_DIALECT,
  host: DB_HOST,
  port: DB_PORT,
});

module.exports = sequelize;
