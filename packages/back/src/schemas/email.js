import errors from './errors.js';

export default {
  email: {
    in: ['body'],
    isEmail: true,
    errorMessage: errors.USER.EMAIL,
  },
};
