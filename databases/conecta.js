import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "escola_idiomas", "lobatoSQL", "1234", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});