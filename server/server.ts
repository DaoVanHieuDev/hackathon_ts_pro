import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import categoryRouter from "./routes/category.routes";
import questionRouter from "./routes/question.routes";
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/questions", questionRouter);

app.listen(port, () => {
  console.log(`server: http://localhost:${port}`);
});
