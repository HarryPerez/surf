import { checkSchema, validationResult } from 'express-validator';

export const formatValidationErrors = (validationErrors) => validationErrors
  .array({ onlyFirstError: true })
  .map((e) => e.msg);

// eslint-disable-next-line consistent-return
export const throwValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res
      .status(400)
      .send(formatValidationErrors(validationErrors));
  }
  next();
};

export const validateSchema = (schema) => checkSchema(schema);

export const validateSchemaAndFail = (schema) => [validateSchema(schema), throwValidationErrors];
