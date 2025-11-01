import exprss from "express";
import { allStudent, createStudent } from "../controllers/studentController.js";

const studentRoute = exprss.Router();

studentRoute.post("/create", createStudent);
studentRoute.get("/", allStudent);
// studentRoute.delete("/:id", deleteClass);

export default studentRoute;
