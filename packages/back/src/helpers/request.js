import { inspect } from 'util';
import jsonexport from 'jsonexport';
import logger from '../logger.js';
import { invalidCsv } from '../errors.js';

const setHeaders = (res, headers = {}) => Object.entries(headers).forEach(
  (header) => res.header(...header),
);

const setAttachment = (res, file = undefined) => file && res.attachment(file);

export const endRequest = ({
  response = undefined, code, res, headers = {}, file = undefined,
}) => {
  setHeaders(res, headers);
  setAttachment(res, file);
  return (response
    ? res.status(code).send(response)
    : res.status(code).end());
};

export const catchRequest = ({
  err, res, message = 'Server Error', internalCode = '9999',
}) => {
  logger.error(inspect(err, { showHidden: false, depth: null }));
  return res.status((err && err.code) || 503).json([{
    internal_code: (err && err.internalCode) || internalCode,
    message: (err && err.message) || message,
  }]);
};

export const csvRequest = ({
  data = [], mapper = (value) => value, fileName, code, res,
}) => {
  if (!data.length) {
    return catchRequest({
      err: invalidCsv('2038'),
      res,
    });
  }

  const formattedData = data.map(mapper);

  return jsonexport(formattedData).then((csv) => endRequest({
    response: csv, code, res, headers: { 'Content-type': 'text/csv' }, attachment: fileName,
  })).catch((err) => catchRequest({
    err, res, message: 'error creating csv', internalCode: '2037',
  }));
};
