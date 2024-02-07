import { Options } from "sequelize";
import dotenv from 'dotenv';

dotenv.config()

const config: Options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'mysql',
}

export = config;