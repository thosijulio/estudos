const dotenv = require('dotenv');

dotenv.config();

const { env } = process;

const config = {
  "development": {
    "username": env.DB_DEVELOPMENT_USERNAME,
    "password": env.DB_DEVELOPMENT_PASSWORD,
    "database": env.DB_DEVELOPMENT_DATABASE,
    "host": env.DB_DEVELOPMENT_HOST,
    "dialect": env.DB_DEVELOPMENT_DIALECT
  },
  "test": {
    "username": env.DB_DEVELOPMENT_USERNAME,
    "password": env.DB_DEVELOPMENT_PASSWORD,
    "database": env.DB_DEVELOPMENT_DATABASE,
    "host": env.DB_TEST_HOST,
    "dialect": env.DB_DEVELOPMENT_DIALECT
  },
  "production": {
    "username": env.DB_PRODUCTION_USERNAME,
    "password": env.DB_PRODUCTION_PASSWORD,
    "database": env.DB_PRODUCTION_DATABASE,
    "host": env.DB_PRODUCTION_HOST,
    "dialect": env.DB_PRODUCTION_DIALECT
  },
}

module.exports = config;
