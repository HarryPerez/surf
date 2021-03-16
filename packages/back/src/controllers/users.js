import User from '../models/users.js';
import { endRequest, catchRequest } from '../helpers/request.js';
import { encrypt, compare } from '../helpers/passwords.js';
import { includes } from '../helpers/array.js';
import { getModelFields, buildQuery } from '../helpers/mongo.js';
import { entityAlreadyExists, entityNotFound, invalidKeys } from '../errors.js';
import { encodeLogin as encode, encodePasswordChange } from '../services/session.js';
import { forgotPasswordEmail } from '../mailers/forgotPassword.js';
import signInMapper from '../serializers/users.js';
import mapUser from '../mappers/users.js';
import logger from '../logger.js';

export const passwordFlow = async (email, res) => {
  const user = await User.findOne({ email });
  if (!user) return endRequest({ response: {}, code: 204, res });
  const token = await encodePasswordChange(user.email);
  const resetLink = `${process.env.FRONTEND_URL}/recover?token=${token}`;
  endRequest({ response: {}, code: 204, res });
  return forgotPasswordEmail([user.email], { resetLink })
    .catch((err) => {
      logger.error(err);
    });
};

export const saveUser = async (req, res) => {
  const { body, active } = req;
  const user = new User({
    ...body, password: await encrypt(body.password), active, role: 'user',
  });
  const exists = await User.findOne({ email: user.email });
  if (exists) return catchRequest({ err: entityAlreadyExists(`email ${user.email}`, 'user', '1031'), res });
  return user.save()
    .then((response) => endRequest({
      response: {
        email: response.email,
      },
      code: 201,
      res,
    }))
    .catch((err) => catchRequest({
      err, res, message: 'Error saving User', internalCode: '1031',
    }));
};

export const signIn = async (req, res) => {
  const { email, password, admin } = req.body;
  const user = await User.findOne({ email, role: admin ? 'admin' : 'user' });
  if (!user) return catchRequest({ err: entityNotFound(`email ${email}`, 'user', '1032'), res });
  const valid = await compare(password, user.password);
  if (!valid) return catchRequest({ err: entityNotFound(`email ${email}`, 'user', '1032'), res });
  if (!user.active) return passwordFlow(email, res);
  const payload = await encode(user.email);
  res.set('authorization', payload);
  logger.info(`User ${user.email} signed in`);
  return endRequest({
    response: signInMapper({
      token: payload,
      role: user.role,
    }),
    code: 200,
    res,
  });
};

export const getUser = async (req, res) => {
  const { user } = req;
  return endRequest({
    response: {
      user: mapUser(user),
    },
    code: 200,
    res,
  });
};

export const getUserById = async (req, res) => User.findById(req.params.id)
  .then((user) => {
    if (!user) return catchRequest({ err: entityNotFound(`id ${req.params.id}`, 'user', '1040'), res });
    return endRequest({
      response: {
        user: mapUser(user),
      },
      code: 200,
      res,
    });
  });

export const changePasswordFlow = (req, res) => {
  const { email } = req.body;
  logger.info(`Email ${email} requested password change`);
  return passwordFlow(email, res);
};

export const updatePassword = async (req, res) => {
  const { user } = req;
  const { password } = req.body;
  user.password = await encrypt(password);
  user.active = true;
  logger.info(`${user.email} password recovery success`);
  return user.save()
    .then((response) => endRequest({
      response: {
        email: response.email,
      },
      code: 201,
      res,
    }))
    .catch((err) => catchRequest({
      err, res, message: 'Error updating password', internalCode: '1034',
    }));
};

export const getUsers = ({ query }, res) => buildQuery(User, query, {}, { updatedAt: -1 }, 100)
  .then((users) => endRequest({ response: users.map(mapUser), code: 200, res }))
  .catch((err) => catchRequest({
    err, res, message: 'Error getting users', internalCode: '1037',
  }));

export const updateUser = (req, res) => User.findById(req.params.id)
  .then((user) => {
    if (!user) return catchRequest({ err: entityNotFound(`id ${req.params.id}`, 'user', '1035'), res });
    if (req.body.password || req.body.email) {
      return catchRequest({
        err: invalidKeys('There are invalid fields in body: password or email cannot be updated', '1035'),
        res,
      });
    }
    if (!includes(Object.keys(req.body), getModelFields(User))) {
      return catchRequest({
        err: invalidKeys('There are invalid fields in body', '1035'),
        res,
      });
    }
    Object.keys(req.body).forEach((field) => {
    // eslint-disable-next-line no-param-reassign
      user[field] = req.body[field];
    });
    return user.save().then((response) => endRequest({
      response: {
        email: response.email,
      },
      code: 201,
      res,
    }));
  })
  .catch((err) => catchRequest({
    err, res, message: 'Error updating user', internalCode: '1035',
  }));

export const deleteUser = (req, res) => User.findById(req.params.id)
  .then((user) => {
    if (!user) return catchRequest({ err: entityNotFound(`id ${req.params.id}`, 'user', '1036'), res });
    return user.remove().then(() => endRequest({
      res,
      code: 204,
    }));
  });
