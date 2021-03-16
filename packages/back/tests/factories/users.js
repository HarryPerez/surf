import User from '../../src/models/users.js';
import userObj from '../mocks/user.js';
import { encrypt } from '../../src/helpers/passwords.js';
import { createMany } from './helpers.js';

const { user: defaultUser } = userObj;

export const createUser = async (user = defaultUser) => new User(
  { ...user, password: await encrypt(user.password) },
).save();

export const createManyUsers = createMany(User, defaultUser);
