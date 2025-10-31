import {
  serial,
  integer,
  pgTable,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";
import classes from "./classes";

const student = pgTable("student", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 50 }).notNull(),
  className: varchar("class_name", { length: 50 }).notNull(),
  classId: integer("class_id")
    .notNull()
    .references(() => classes.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export default student;
