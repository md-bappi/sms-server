import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import {
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from "./src/secret";

export default defineConfig({
  out: "./drizzle/migrations",
  schema: "./src/drizzle/config/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    host: POSTGRES_HOST,
    port: Number(POSTGRES_PORT),
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    ssl: false,
  },
});
