import { catchRequest } from '../helpers/request.js';

import {
  invalidApiKey,
} from '../errors';

export default (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) return catchRequest({ err: invalidApiKey('9000'), res });
  if (apiKey !== process.env.API_KEY) return catchRequest({ err: invalidApiKey('9000'), res });
  return next();
};
