/* eslint-disable no-undef */
import request from 'supertest';
import app from '../src/app.js';

describe('Test the start app', () => {
  test('It should response the GET method in testing mode', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
  });
});
