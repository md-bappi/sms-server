import { eq } from "drizzle-orm";
import db from "../drizzle/config/db.js";
import { classes, students } from "../drizzle/config/schema.js";

export const createStudent = async (req, res) => {
  try {
    const { name, age, email, subject } = req.body;
    console.log(name, age, email, subject);

    // Validate required fields
    if (!name || !age || !email || !subject) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find class by className
    const existingClass = await db
      .select()
      .from(classes)
      .where(eq(classes.subject, subject))
      .limit(1);

    if (existingClass.length === 0) {
      return res.status(404).json({ message: "subject not found" });
    }

    const classId = existingClass[0].id;

    // Insert student with dynamic classId
    const newStudent = await db
      .insert(students)
      .values({
        name,
        age,
        email,
        subject,
        classId,
      })
      .returning();

    return res.status(201).json({
      message: "Student created successfully",
      data: newStudent,
    });
  } catch (error) {
    console.error("Error creating student:", error);
    return res.status(500).json({
      message: "student creation failed",
      error: error.message,
    });
  }
};

export const allStudent = async (req, res) => {
  try {
    const allStudent = await db.select().from(students);
    if (allStudent.length === 0) {
      return res.status(404).json({ message: "No Students Found" });
    }

    return res.status(200).json({
      message: "All Students",
      data: allStudent,
    });
  } catch (error) {
    console.error(error);
  }
};
