export const unauthorizedUser = (message, internalCode) => ({
  code: 401,
  message,
  internalCode,
});

export const invalidKeys = (message, internalCode) => ({
  code: 400,
  message,
  internalCode,
});

export const entityAlreadyExists = (id, entity, internalCode) => ({ code: 400, message: `The ${entity} with ${id} already exists`, internalCode });

export const entityNotFound = (id, entity, internalCode) => ({ code: 404, message: `The ${entity} with ${id} was not found`, internalCode });

export const forbiddenUser = (message, internalCode) => ({
  code: 403,
  message,
  internalCode,
});

export const tokenExpired = (internalCode) => ({
  code: 401,
  message: 'Token expired',
  internalCode,
});

export const invalidSignature = (internalCode) => ({
  code: 400,
  message: 'Bad token',
  internalCode,
});

export const invalidApiKey = (internalCode) => ({
  code: 401,
  message: 'The API key is invalid',
  internalCode,
});

export const invalidMongoIdError = (id, internalCode) => ({
  code: 400,
  message: `Invalid id ${id}`,
  internalCode,
});

export const invalidFormatError = (message) => ({
  code: 400,
  message,
  internalCode: '9000',
});

export const invalidCsv = (internalCode) => ({
  code: 400,
  message: 'Invalid CSV data',
  internalCode,
});

export const JWT_ERRORS = {
  'jwt expired': (res) => ({ err: tokenExpired('2004'), res }),
  'invalid signature': (res) => ({ err: invalidSignature('2007'), res }),
};
