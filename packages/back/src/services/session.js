import jwt from 'jsonwebtoken';

export const encodeLogin = (data,
  expiresIn = process.env.JWT_EXPIRATION_TIME) => jwt.sign(
  { data }, process.env.JWT_SECRET, { expiresIn },
);

export const decodeLogin = (token) => jwt.verify(token, process.env.JWT_SECRET);

export const encodePasswordChange = (data, expiresIn = '600s') => jwt.sign(
  { data }, process.env.PASSWORD_CHANGE_SECRET, { expiresIn },
);

export const decodePasswordChange = (token) => jwt.verify(
  token, process.env.PASSWORD_CHANGE_SECRET,
);
