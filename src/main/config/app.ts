import express from 'express';
import cookieParser from 'cookie-parser';
import setupRoutes from './routes';
import { Sequelize } from 'sequelize';
import { initDatabase } from '../../infra/db/models';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number.parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'travel_planner',
  logging: false
})

const app = express();
app.use(express.json());
app.use(cookieParser());

(async () => {
  await initDatabase(sequelize);
  setupRoutes(app);
})();

export { app, sequelize };