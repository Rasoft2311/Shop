const ApiError = require('../utils/errors/ApiError');

function provideValidation(schema) {
  return async (req, res, next) => {
    try {
      const validatedBody = await schema.validate(req.body, { abortEarly: false, stripUnknown: true });
      req.body = validatedBody;
      next();
    } catch(err) {
      next(ApiError.invalidCredentials(err.errors));
    }
  };
}

module.exports = provideValidation;