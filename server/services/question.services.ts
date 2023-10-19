import db from "../utils/db";
import { getCurrentDate } from "../helps/ConvertDate";
export const findOne = async (id: number) => {
  const question = await db.execute(
    `SELECT * FROM question WHERE question_id = ?`,
    [id]
  );
  return question;
};
export const findAnswer = async (id: number) => {
  const answer = await db.execute(
    `SELECT * FROM answer WHERE question_id = ?`,
    [id]
  );
  return answer;
};

export const findAll = async () => {
  const question = await db.execute(`SELECT * FROM question`);
  return question;
};

export const filterQuestion = async (id: number, level: any, limit: number) => {
  if (id && level && limit) {
    const question = await db.execute(
      `SELECT * FROM question WHERE category_id = ? and level = ? and limit = ?`,
      [id, level, limit]
    );
    return question;
  } else {
    return "Lỗi";
  }
};

export const createQuestion = async (
  id: number,
  level: number,
  content: string
) => {
  if (id && content && level) {
    const date = getCurrentDate();
    const question = await db.execute(
      `INSERT INTO question(category_id,created_at,content,level) VALUES(?,?,?,?)`,
      [id, date, content, level]
    );
    return question;
  } else {
    return "";
  }
};
