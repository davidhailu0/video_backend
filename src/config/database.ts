import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_URI || "mysql://root:yourpassword@localhost:3306/appdb",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  }
);
