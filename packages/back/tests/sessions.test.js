/* eslint-disable no-undef */
import dotenv from 'dotenv';
import { sendMailMock, nodemailer } from './mocks/mailer.js';
import { authRequest, generateToken, publicRequest } from './helpers/request.js';
import userObj from './mocks/user.js';
import { createUser } from './factories/users.js';
import { deleteDocumentsFrom } from './helpers/db.js';
import { MODELS } from './helpers/constants.js';
import { decodeLogin as decode } from '../src/services/session.js';
import { initDatabase, mongoose } from '../src/db.js';

const { user } = userObj;

describe('sessions', () => {
  beforeAll(async () => {
    dotenv.config();
    initDatabase();
    await deleteDocumentsFrom(MODELS);
  });
  beforeEach((done) => {
    sendMailMock.mockClear();
    nodemailer.createTransport.mockClear();
    done();
  });
  afterEach((async () => {
    await deleteDocumentsFrom(MODELS);
  }));
  afterAll(async () => {
    await mongoose.connection.close();
  });
  describe('sign in', () => {
    describe('existing user', () => {
      test('It should have a successful response signing in', async () => {
        await createUser();
        const response = await publicRequest('post', '/sign_in', { email: user.email, password: user.password });
        expect(response.statusCode).toBe(200);
        expect(response.body.expirationTime).toBe('1h');
        expect(response.body.role).toBe('user');
        const { token } = response.body;
        const email = await decode(token).data;
        expect(email).toEqual(user.email);
      });
      test('It should have a successful response signing in as admin', async () => {
        await createUser({ ...user, email: 'admin@admin.com', role: 'admin' });
        const response = await publicRequest('post', '/sign_in', { email: 'admin@admin.com', password: user.password, admin: true });
        expect(response.statusCode).toBe(200);
        expect(response.body.expirationTime).toBe('1h');
        expect(response.body.role).toBe('admin');
        const { token } = response.body;
        const email = await decode(token).data;
        expect(email).toEqual('admin@admin.com');
      });
      test('It should fail because of wrong email', async () => {
        await createUser();
        const response = await publicRequest('post', '/sign_in', { email: 'fake@fake.com', password: user.password });
        expect(response.statusCode).toBe(404);
        expect(response.body[0].message).toBe('The user with email fake@fake.com was not found');
        expect(response.body[0].internal_code).toBe('1032');
      });
      test('It should fail because of wrong password', async () => {
        await createUser();
        const response = await publicRequest('post', '/sign_in', { email: user.email, password: '1234' });
        expect(response.statusCode).toBe(404);
        expect(response.body[0].message).toBe('The user with email hi@hi.com was not found');
        expect(response.body[0].internal_code).toBe('1032');
      });
      test('It should fail because of trying to login as admin', async () => {
        await createUser();
        const response = await publicRequest('post', '/sign_in', { email: user.email, password: user.password, admin: true });
        expect(response.statusCode).toBe(404);
        expect(response.body[0].message).toBe('The user with email hi@hi.com was not found');
        expect(response.body[0].internal_code).toBe('1032');
      });
      test('It should fail because of no email was sent', async () => {
        await createUser();
        const response = await publicRequest('post', '/sign_in', { password: user.password });
        expect(response.statusCode).toBe(400);
        expect(response.body[0].message).toBe('email must be present and should be valid');
        expect(response.body[0].internal_code).toBe('0034');
      });
      test('It should fail because of no password was sent', async () => {
        await createUser();
        const response = await publicRequest('post', '/sign_in', { email: user.email });
        expect(response.statusCode).toBe(400);
        expect(response.body[0].message).toBe('password must be present and should be a string');
        expect(response.body[0].internal_code).toBe('0035');
      });
    });
    describe('new user', () => {
      test('It should send email if the user is new', async () => {
        await createUser({ ...user, email: 'new@zerf.com.ar', active: false });
        const response = await publicRequest('post', '/sign_in', { email: 'new@zerf.com.ar', password: user.password });
        expect(response.statusCode).toBe(204);
        expect(sendMailMock).toHaveBeenCalled();
      });
    });
  });
  describe('authenticated routes', () => {
    describe('user routes', () => {
      test('It should be authenticated as user if ask for actives details', async () => {
        const response = await publicRequest('get', '/me');
        expect(response.statusCode).toBe(401);
        expect(response.body[0].message).toBe('No token was set');
        expect(response.body[0].internal_code).toBe('2000');
      });
    });
    describe('admin routes', () => {
      test('It should be authenticated as admin if ask for get users using user token', async () => {
        await createUser();
        const token = await generateToken();
        const response = await authRequest(token, 'post', '/admin/users');
        expect(response.statusCode).toBe(403);
        expect(response.body[0].message).toBe('User \'hi@hi.com\' is not Admin');
        expect(response.body[0].internal_code).toBe('2005');
      });
      test('It should be authenticated as admin if ask for updating users using user token', async () => {
        await createUser();
        const token = await generateToken();
        const response = await authRequest(token, 'put', '/admin/users/asd');
        expect(response.statusCode).toBe(403);
        expect(response.body[0].message).toBe('User \'hi@hi.com\' is not Admin');
        expect(response.body[0].internal_code).toBe('2005');
      });
      test('It should be authenticated as admin if ask for deleting users using user token', async () => {
        await createUser();
        const token = await generateToken();
        const response = await authRequest(token, 'delete', '/admin/users/asd');
        expect(response.statusCode).toBe(403);
        expect(response.body[0].message).toBe('User \'hi@hi.com\' is not Admin');
        expect(response.body[0].internal_code).toBe('2005');
      });
      test('It should be authenticated as admin if ask for create users', async () => {
        const response = await publicRequest('post', '/admin/users');
        expect(response.statusCode).toBe(401);
        expect(response.body[0].message).toBe('No token was set');
        expect(response.body[0].internal_code).toBe('2000');
      });
      test('It should be authenticated as admin if ask for getting users', async () => {
        const response = await publicRequest('get', '/admin/users');
        expect(response.statusCode).toBe(401);
        expect(response.body[0].message).toBe('No token was set');
        expect(response.body[0].internal_code).toBe('2000');
      });
      test('It should be authenticated as admin if ask for getting user by id', async () => {
        const response = await publicRequest('get', '/admin/users/1');
        expect(response.statusCode).toBe(401);
        expect(response.body[0].message).toBe('No token was set');
        expect(response.body[0].internal_code).toBe('2000');
      });
      test('It should be authenticated as admin if ask for edit users', async () => {
        const response = await publicRequest('put', '/admin/users/asd');
        expect(response.statusCode).toBe(401);
        expect(response.body[0].message).toBe('No token was set');
        expect(response.body[0].internal_code).toBe('2000');
      });
      test('It should be authenticated as admin if ask for delete users', async () => {
        const response = await publicRequest('delete', '/admin/users/asd');
        expect(response.statusCode).toBe(401);
        expect(response.body[0].message).toBe('No token was set');
        expect(response.body[0].internal_code).toBe('2000');
      });
    });
  });
});
