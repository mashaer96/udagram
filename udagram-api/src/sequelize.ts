import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize(
  'postgres://postgres:12345678@database-2.caoct7juhaxy.us-east-1.rds.amazonaws.com:5432/postgres'
);
