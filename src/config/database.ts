import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME || "mydb123",
  process.env.DB_USER || "myuser",
  process.env.DB_PASSWORD || "mypassword",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  }
);
