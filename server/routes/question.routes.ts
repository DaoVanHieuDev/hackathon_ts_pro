import express from "express";
import * as questionControllers from "../controllers/question.controllers";
const questionRouter = express.Router();
questionRouter.get("/", questionControllers.findAll);
questionRouter.get("/:id", questionControllers.findOne);
questionRouter.get("/:id/answers", questionControllers.findAnswer);
questionRouter.post("/", questionControllers.createQuestion);
export default questionRouter;
