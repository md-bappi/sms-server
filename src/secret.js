import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;
const POSTGRES_DB = process.env.POSTGRES_DB;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PORT = process.env.POSTGRES_PORT;
const POSTGRES_HOST = process.env.POSTGRES_HOST;

export {
  PORT,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
  POSTGRES_PORT,
  POSTGRES_HOST,
};
