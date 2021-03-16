/* eslint-disable no-undef */
import dotenv from 'dotenv';
import { S3, getSignedUrlPromiseMock } from './mocks/s3.js';
import { authRequest, generateToken } from './helpers/request.js';
import { deleteDocumentsFrom } from './helpers/db.js';
import { MODELS } from './helpers/constants.js';
import { initDatabase, mongoose } from '../src/db.js';

let token;

describe('files', () => {
  beforeAll(async () => {
    initDatabase();
    dotenv.config();
    await deleteDocumentsFrom(MODELS);
    token = await generateToken();
  });

  afterEach((async () => {
    await deleteDocumentsFrom(MODELS);
    token = await generateToken();
  }));
  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('S3 signed URL controller', () => {
    beforeEach(async () => {
      getSignedUrlPromiseMock.mockClear();
      S3.mockClear();
    });

    test('It should have called s3SignedUrl', async () => {
      const response = await authRequest(token, 'post', '/files/signed_url', { name: 'test', extension: 'png' });

      expect(getSignedUrlPromiseMock).toHaveBeenCalled();
      expect(response.body).toMatchObject({ url: 'test.com', fields: {} });
    });
  });

  describe('download csv', () => {
    it('downloads csv correctly', async () => {
      const headers = [
        'order',
        'name',
        'adress',
        'phone',
      ];

      const data = [
        '1',
        'Lorem Ipsum',
        'Calle Falsa 123',
        '+54-1123456789',
      ];

      const headersDataObject = [Object.fromEntries(
        headers.map((_, index) => ([headers[index], data[index]])),
      )];

      const response = await authRequest(token, 'post', '/files/csv', { data: headersDataObject });

      expect(response.status).toBe(200);

      const splittedCSV = response.res.text.split(/\n/);
      const resHeaders = splittedCSV[0].split(',');
      const resData = splittedCSV[1].split(',');
      expect(resHeaders).toStrictEqual(headers);
      expect(resData).toStrictEqual(data);
    });
  });
});
