import { drizzle } from "drizzle-orm/node-postgres";
import {
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
  POSTGRES_PORT,
  POSTGRES_HOST,
} from "../../secret.js";
import { Pool } from "pg";

const pool = new Pool({
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
});

const db = drizzle(pool);

export default db;
