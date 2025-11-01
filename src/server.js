import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./secret.js";
import classRoute from "./routes/classRoute.js";
import studentRoute from "./routes/studentRoute.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/class", classRoute);
app.use("/api/student", studentRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
