import { serial, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

const classes = pgTable("class", {
  id: serial("id").primaryKey(),
  className: varchar("class_name", { length: 50 }).notNull(),
  teacherName: varchar("teacher_name", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export default classes;
