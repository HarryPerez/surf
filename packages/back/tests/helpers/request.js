import supertest from 'supertest';
import app from '../../src/app.js';
import userObj from '../mocks/user.js';
import { createUser } from '../factories/users.js';

const { user } = userObj;

export const request = () => supertest(app);

const requestBuilder = (headers) => async (method, path, body = {}) => {
  const newRequest = supertest(app)[method](path);
  headers.forEach(({ header, content }) => newRequest.set(header, content));
  return newRequest.send(body);
};

export const generateToken = async (email = 'hi@hi.com', role = 'user') => {
  await createUser({ ...user, role, email });
  return supertest(app)
    .post('/sign_in')
    .send({ email, password: user.password, admin: role === 'admin' })
    .then((res) => res.body.token);
};

export const publicRequest = (method, path, body) => requestBuilder([{ header: 'Accept', content: 'application/json' }])(method, path, body);

export const authRequest = (token, method, path, body) => requestBuilder([{ header: 'authorization', content: `Bearer ${token}` }, { header: 'Accept', content: 'application/json' }])(method, path, body);

export const insertData = (body, endpoint) => supertest(app)
  .post(endpoint)
  .set('Accept', 'application/json')
  .send(body);

export const apiRequest = (key, method, path, body) => requestBuilder([{ header: 'x-api-key', content: key }, { header: 'Accept', content: 'application/json' }])(method, path, body);
