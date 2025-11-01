import Joi from "joi";

const classSchema = Joi.object({
  id: Joi.number().integer().positive(), // optional if auto-increment
  className: Joi.string().max(50).required(),
  teacherName: Joi.string().max(50).required(),
});

const studentSchema = Joi.object({
  id: Joi.number().integer().positive(), // optional if auto-increment
  name: Joi.string().max(50).required(),
  age: Joi.number().integer().min(1).max(120).required(),
  email: Joi.string().email().max(50).required(),
  classId: Joi.number().integer().positive().required(), // foreign key reference
});

export { classSchema, studentSchema };
