import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs.js';
import { initDatabase } from './db.js';
import app from './app_builder.js';

import './services/rollbar.js';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

initDatabase();
export default app;
