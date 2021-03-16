import health from './controllers/health_check.js';
import {
  saveUser, signIn, getUser, changePasswordFlow,
  updatePassword, getUsers, updateUser, deleteUser, getUserById,
} from './controllers/users.js';
import { validateSchemaAndFail } from './middlewares/params.js';
import mongoQueries from './middlewares/mongo_queries.js';

import newActiveUser from './middlewares/users.js';

import { authenticateUser as authenticate, authenticatePasswordChange, isAdmin } from './middlewares/auth.js';
import {
  usersSchema, signInSchema,
  passwordSchema, emailSchema,
} from './schemas/index.js';
import getSettings from './controllers/settings.js';

import { createSignedUrl, downloadCsv } from './controllers/files.js';

export default (app) => {
  // web app
  app.get('/health', health);

  app.post('/users', [validateSchemaAndFail(usersSchema), newActiveUser], saveUser);
  app.post('/users/forgot_password', [validateSchemaAndFail(emailSchema)], changePasswordFlow);
  app.post('/users/password', [validateSchemaAndFail(passwordSchema), authenticatePasswordChange], updatePassword);

  app.post('/admin/users', [authenticate, isAdmin, validateSchemaAndFail(usersSchema), newActiveUser], saveUser);
  app.get('/admin/users', [authenticate, isAdmin], getUsers);
  app.get('/admin/users/:id', [authenticate, isAdmin, mongoQueries], getUserById);
  app.put('/admin/users/:id', [authenticate, isAdmin, mongoQueries], updateUser);
  app.delete('/admin/users/:id', [authenticate, isAdmin, mongoQueries], deleteUser);

  app.post('/files/signed_url', [], createSignedUrl);
  app.post('/sign_in', [validateSchemaAndFail(signInSchema)], signIn);

  app.post('/files/csv', [], downloadCsv);
  app.get('/me', [authenticate], getUser);
  app.get('/settings', [], getSettings);
};
