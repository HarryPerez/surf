import bcrypt from 'bcryptjs';

const SALT_ROUND = 10;

export const encrypt = (password) => bcrypt.hash(password, SALT_ROUND);

export const compare = (received, saved) => bcrypt.compare(received, saved);
