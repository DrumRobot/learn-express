require('dotenv').config();

const {
  DB_HOST: host,
  DB_USER: username,
  DB_PASSWORD: password,
} = process.env;

module.exports = {
  development: {
    username,
    password,
    database: 'nodejs',
    host,
    dialect: 'mysql',
  },
  test: {
    username,
    password,
    database: 'database_test',
    host,
    dialect: 'mysql',
  },
  production: {
    username,
    password,
    database: 'database_production',
    host,
    dialect: 'mysql',
  },
};
