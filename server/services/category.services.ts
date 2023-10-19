import db from "../utils/db";
// đọc theo id
export const findOne = async (id: number) => {
  const category = await db.execute(
    `SELECT * FROM category WHERE category_id = ?`,
    [id]
  );
  return category;
};
// đọc
export const findAll = async () => {
  const category = await db.execute(`SELECT * FROM category`);
  return category;
};
// tạo
export const createCategory = async (name: string) => {
  const newCategory = await db.execute(
    `INSERT INTO category(\`name\`) VALUES (?)`,
    [name]
  );
  return newCategory;
};
