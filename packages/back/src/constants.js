import mongoose from 'mongoose';

const USERS = 'users';

export const FIELDS_TYPES_PER_MODEL = {
  [USERS]: {
    string: ['name', 'surname', 'email', 'role', 'section'],
  },
};

export const MONGO_KEYS = {
  gte: '$gte',
  lt: '$lt',
  or: '$or',
  in: '$in',
};

const dateTransformation = (value) => new Date(value);

const idTransformation = (ids) => {
  const array = typeof ids === 'string' ? [ids] : ids;
  return array.map(mongoose.Types.ObjectId);
};

export const MONGO_TRANSFORMATIONS = {
  updatedAt: dateTransformation,
  createdAt: dateTransformation,
  _id: idTransformation,
};

export const DEFAULT_UPLOAD_EXPIRE_TIME = 300;

export const VALID_IMAGE_EXTENSIONS = ['jpg', 'png'];
