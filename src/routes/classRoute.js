import exprss from "express";
import {
  allClasses,
  createClass,
  deleteClass,
  updateClass,
} from "../controllers/classController.js";

const classRoute = exprss.Router();

classRoute.post("/create", createClass);
classRoute.get("/", allClasses);
classRoute.put("/:id", updateClass);
classRoute.delete("/:id", deleteClass);

export default classRoute;
