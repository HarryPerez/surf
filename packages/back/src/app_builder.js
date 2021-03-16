/* eslint-disable import/no-extraneous-dependencies */

import express from 'express';
import pino from 'express-pino-logger';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import initRoutes from './routes.js';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
if (process.env.NODE_ENV !== 'testing') {
  app.use(pino());
}

initRoutes(app);

export default app;
