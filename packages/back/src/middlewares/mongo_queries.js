import sanitize from 'mongo-sanitize';
import { catchRequest } from '../helpers/request.js';

import {
  invalidMongoIdError,
} from '../errors.js';

export default (req, res, next) => {
  sanitize(req.query);
  if (req.params.id && !req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return catchRequest({ err: invalidMongoIdError(req.params.id, '1038'), res });
  }
  return next();
};
