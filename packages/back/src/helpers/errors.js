import logger from '../logger.js';

export const swallowError = ({ err, message }) => {
  logger.error(message);
  logger.error(err);
  return Promise.resolve();
};

// eslint-disable-next-line prefer-promise-reject-errors
export const handleError = ({ err, message, code }) => Promise.reject({
  message,
  code,
  err,
});
