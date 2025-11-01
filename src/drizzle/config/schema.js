import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  varchar,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

// ---------- Class Table ----------
export const classes = pgTable("classes", {
  id: serial("id").primaryKey(),
  subject: varchar("subject", { length: 50 }).notNull(),
  teacherName: varchar("teacher_name", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ---------- Student Table ----------
export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 50 }).notNull().unique(),
  subject: varchar("subject", { length: 50 }).notNull(),
  classId: integer("class_id")
    .notNull()
    .references(() => classes.id), // FK → classes.id
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ---------- Relations ----------
export const classesRelations = relations(classes, ({ many }) => ({
  students: many(students), // One class → many students
}));

export const studentsRelations = relations(students, ({ one }) => ({
  class: one(classes, {
    fields: [students.classId],
    references: [classes.id],
  }),
}));
