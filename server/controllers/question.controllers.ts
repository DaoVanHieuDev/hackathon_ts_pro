import { Request, Response } from "express";

import * as questionService from "../services/question.services";

export const findAll = async (req: Request, res: Response) => {
  const category = req.query.category;
  const level = req.query.level;
  const limit = req.query.limit;
  try {
    if (category && level && limit) {
      const [question] = await questionService.filterQuestion(
        Number(category),
        level,
        Number(limit)
      );
      res.status(200).json(question);
    } else {
      const [row] = await questionService.findAll();
      res.status(200).json(row);
    }
  } catch (error) {
    console.log(error);
  }
};
export const findOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [row]: any = await questionService.findOne(Number(id));
    if (row.length > 0) {
      res.status(200).json(row);
    } else {
      res.status(500).json("Không tồn tại");
    }
  } catch (error) {
    console.log(error);
  }
};
export const findAnswer = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [row]: any = await questionService.findOne(Number(id));
    if (row.length > 0) {
      const [answer]: any = await questionService.findAnswer(Number(id));
      const question = [...row, ...answer];
      res.status(200).json(question);
    } else {
      res.status(500).json("Lỗi");
    }
  } catch (error) {
    console.log(error);
  }
};

export const createQuestion = async (req: Request, res: Response) => {
  const { category_id, content, level } = req.body;
  try {
    const [question] = await questionService.createQuestion(
      category_id,
      content,
      level
    );
    res.status(200).json(question);
  } catch (error) {
    console.log(error);
  }
};
