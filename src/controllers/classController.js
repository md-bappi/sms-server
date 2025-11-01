import { eq } from "drizzle-orm";
import db from "../drizzle/config/db.js";
import { classes } from "../drizzle/config/schema.js";

export const createClass = async (req, res) => {
  try {
    const { subject, teacherName } = req.body;
    console.log(subject, teacherName);

    //Validate required fields
    if (subject === "" || teacherName === "" || !subject || !teacherName)
      return res
        .status(400)
        .json({ message: "Class name and teacher name are required" });

    // Insert class
    const newClass = await db.insert(classes).values({
      subject,
      teacherName,
    });

    return res.status(200).json({
      message: "Class created successfully",
      data: newClass,
    });
  } catch (error) {
    console.error(error);
  }
};

export const allClasses = async (req, res) => {
  try {
    const allClasses = await db.select().from(classes);
    if (allClasses.length === 0) {
      return res.status(404).json({ message: "No classes found" });
    }
    return res.status(200).json({
      message: "All classes",
      data: allClasses,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const { subject, teacherName } = req.body;

    const existingClass = await db
      .select()
      .from(classes)
      .where(eq(classes.id, id))
      .limit(1);

    if (existingClass.length === 0) {
      return res.status(404).json({ message: "Class not exists!" });
    }

    const updatedClass = await db
      .update(classes)
      .set({ subject, teacherName })
      .where(eq(classes.id, id))
      .returning();

    return res.status(200).json({
      message: "Class updated successfully",
      data: updatedClass,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteClass = async (req, res) => {
  try {
    const { id } = req.params;
    const existingClass = await db
      .select()
      .from(classes)
      .where(eq(classes.id, id))
      .limit(1);

    if (existingClass.length === 0) {
      return res.status(404).json({ message: "Class not exists!" });
    }

    const deletedClass = await db
      .delete(classes)
      .where(eq(classes.id, id))
      .returning();

    return res.status(200).json({
      message: "Class deleted successfully",
      data: deletedClass,
    });
  } catch (error) {
    console.error(error);
  }
};
