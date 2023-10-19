import { Request, Response } from "express";

import * as categoryService from "../services/category.services";

export const findAll = async (req: Request, res: Response) => {
  try {
    const [category] = await categoryService.findAll();
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};

export const findOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [category]: any = await categoryService.findOne(Number(id));
    if (category.length > 0) {
      res.status(200).json(category);
    } else {
      res.status(500).json({
        message: "category not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    if (name) {
      const [category] = await categoryService.createCategory(name);
      res.status(200).json(category);
    } else {
      res.status(500).json({
        message: "Không đc để trống",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
