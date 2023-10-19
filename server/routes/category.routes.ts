import express from "express";
import * as categoryController from "../controllers/category.controllers";
const categoryRouter = express.Router();
categoryRouter.get("/", categoryController.findAll);
categoryRouter.get("/:id", categoryController.findOne);
categoryRouter.post("/", categoryController.createCategory);
export default categoryRouter;
