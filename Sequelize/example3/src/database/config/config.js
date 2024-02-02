const dotenv = require('dotenv');

dotenv.config();

const { env } = process;

const config = {
  DEVELOPMENT: {
    username: env.DB_DEVELOPMENT_USERNAME,
    password: env.DB_DEVELOPMENT_PASSWORD,
    database: env.DB_DEVELOPMENT_DATABASE,
    host: env.DB_DEVELOPMENT_HOST,
    port: env.DB_DEVELOPMENT_PORT,
    dialect: env.DB_DEVELOPMENT_DIALECT
  },
  TEST: {
    username: env.DB_DEVELOPMENT_USERNAME,
    password: env.DB_DEVELOPMENT_PASSWORD,
    database: env.DB_DEVELOPMENT_DATABASE,
    host: env.DB_TEST_HOST,
    port: env.DB_TEST_PORT,
    dialect: env.DB_DEVELOPMENT_DIALECT
  },
  PRODUCTION: {
    username: env.DB_PRODUCTION_USERNAME,
    password: env.DB_PRODUCTION_PASSWORD,
    database: env.DB_PRODUCTION_DATABASE,
    host: env.DB_PRODUCTION_HOST,
    port: env.DB_PRODUCTION_PORT,
    dialect: env.DB_PRODUCTION_DIALECT
  },
}

module.exports = config;
