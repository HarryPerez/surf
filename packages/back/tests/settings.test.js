/* eslint-disable no-undef */
import dotenv from 'dotenv';
import { authRequest, generateToken } from './helpers/request.js';
import settingsObj from './mocks/settings.js';
import { deleteDocumentsFrom } from './helpers/db.js';
import { MODELS } from './helpers/constants.js';
import { initDatabase, mongoose } from '../src/db.js';
import { createSettings } from './factories/settings.js';

let token;

describe('settings controller', () => {
  beforeAll(async () => {
    dotenv.config();
    initDatabase();
    await deleteDocumentsFrom(MODELS);
  });
  beforeEach(async () => {
    token = await generateToken();
  });
  afterEach(async () => {
    await deleteDocumentsFrom(MODELS);
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });
  describe('get settings', () => {
    test('should get the settings correctly', async () => {
      await createSettings();
      const response = await authRequest(token, 'get', '/settings');
      expect(response.statusCode).toBe(200);
      expect(response.body.brandPrimary).toEqual(settingsObj.brandPrimary);
    });
    test('should fail if there is no settings in the db', async () => {
      const response = await authRequest(token, 'get', '/settings');
      expect(response.statusCode).toBe(404);
      expect(response.body[0].internal_code).toBe('1039');
    });
  });
});
