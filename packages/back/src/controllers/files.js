/* eslint-disable import/prefer-default-export */

import { endRequest, catchRequest, csvRequest } from '../helpers/request.js';
import { s3GenerateUrlWithExtension } from '../services/s3.js';

export const createSignedUrl = async (req, res) => {
  const { name, extension } = req.body;

  return s3GenerateUrlWithExtension(extension, name).then((data) => endRequest({
    response: data,
    code: 201,
    res,
  })).catch((err) => catchRequest({
    err, res, message: 'error creating presigned url', internalCode: 4000,
  }));
};

export const downloadCsv = (req, res) => csvRequest({
  data: req.body.data,
  fileName: req.body.filename,
  code: 200,
  res,
});
