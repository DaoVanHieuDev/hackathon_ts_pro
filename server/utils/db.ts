// Những config để kết nối
import mysql2, { PoolOptions, Pool } from "mysql2";

// Tạo các config để kết nối

const databaseConfig: PoolOptions = {
  database: "erdcompie",
  port: 3306,
  host: "localhost",
  user: "root",
  password: "chocho123",
};

// Khởi tạo kết nối

const db: Pool = mysql2.createPool(databaseConfig);

export default db.promise();
